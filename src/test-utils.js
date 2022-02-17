import React from 'react';
import { render } from '@testing-library/react';
import { store } from './app/store';
import { Provider } from 'react-redux';

const StoreProvider = ( { children } ) => {
		return <Provider store={ store }>{ children }</Provider>;
	},
	renderWithProvider = ( ui, options ) =>
		render( ui, { wrapper: StoreProvider, ...options } );

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProvider };

// Add missing window.matchMedia mock needed by the rich text editor
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty( window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation( ( query ) => ( {
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	} ) ),
} );
