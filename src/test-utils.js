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
