import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../components/LayoutEditor/layoutSlice';

export const store = configureStore( {
	reducer: {
		layout: layoutReducer,
	},
} );
