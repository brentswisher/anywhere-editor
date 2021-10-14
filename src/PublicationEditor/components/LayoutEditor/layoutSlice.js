import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	content: [],
};

export const layoutSlice = createSlice( {
	name: 'layout',
	initialState,
	reducers: {
		moveItem: ( state, action ) => {
			const { currentIndex, newIndex } = action.payload,
				item = state.content[ currentIndex ];
			state.content.splice( currentIndex, 1 );
			state.content.splice( newIndex, 0, item );
		},
		addContentItem: ( state, action ) => {
			// Reminder: Redux Toolkit allows us to write "mutating" logic in reducers.
			// It doesn't actually mutate the state because it uses the Immer library
			state.content.push( action.payload );
		},
		removeContentItem: ( state, action ) => {
			state.content.splice( action.payload, 1 );
		},
		setContentItemData: ( state, action ) => {
			const { index, data } = action.payload;
			state.content[ index ].data = data;
		},
	},
} );

export const {
	moveItem,
	addContentItem,
	removeContentItem,
	setContentItemData,
} = layoutSlice.actions;

export const selectContent = ( state ) => state.layout.content;

export default layoutSlice.reducer;