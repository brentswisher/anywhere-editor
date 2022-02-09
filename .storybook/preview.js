import React from 'react';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';

const StoreProvider = ( { children } ) => (
	<Provider store={ store }>{ children }</Provider>
);

export const decorators = [
	( Story ) => (
		<StoreProvider>
			<Story />
		</StoreProvider>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
import '../demo/src/index.css';
