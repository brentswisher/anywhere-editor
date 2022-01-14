import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../components/LayoutEditor/layoutSlice';
import configReducer from '../components/LayoutEditor/configSlice';

export const store = configureStore( {
	reducer: {
		layout: layoutReducer,
		config: configReducer,
	},
} );
