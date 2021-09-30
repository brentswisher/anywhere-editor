import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	content: [ 4, 2 ],
};

export const layoutSlice = createSlice( {
	name: 'layout',
	initialState,
	reducers: {
		addContentItem: ( state, action ) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library
			state.content.push( action.payload );
		},
		removeContentItem: ( state, action ) => {
			state.content.splice( action.payload, 1 );
		},
	},
} );

export const { addContentItem, removeContentItem } = layoutSlice.actions;

export const selectContent = ( state ) => state.layout.content;

export default layoutSlice.reducer;
