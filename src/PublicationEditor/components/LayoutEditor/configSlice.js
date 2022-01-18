import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cssClasses: {
		'block-list': 'block-list',
		'block-actions': 'menu chunkActions chunkActions-full',
		'article-content': 'article-content',

		'error-container': 'callotu alert',

		'content-buttons': 'content-buttons button-group',
		'button-primary': 'button primary',
		'button-secondary': 'button secondary',
		'button-success': 'button success',
		'button-alert': 'button alert',

		'button-group': 'button-group',

		'position-full': 'position-full',
		'position-left': 'position-left',
		'position-right': 'position-right',
		'position-full-page': 'position-full-page',
		'position-offset-full': 'position-offset-full',
		'position-offset-left': 'position-offset-left',
		'position-offset-right': 'position-offset-right',

		'text-left': 'text-left',
		'text-right': 'text-right',
		'text-center': 'text-center',

		controlContainer: 'controlContainer',

		modal: 'modal',
		'modal-overlay': 'modal-overlay',

		'sr-only': 'show-for-sr',
		active: 'is-active',
		visible: 'visible',
		'menu-dropdown': 'menu dropdown',

		'tab-group': 'tabs',
		'tab-content': 'tabs-content',
		'tab-panel': 'tabs-panel',
		'tab-title': 'tabs-title',

		gallery: 'gallery',
		'gallery-items': 'gallery-items',
		'gallery-item': 'gallery-item',
		'gallery-caption': 'gallery-caption',
	},
};

export const configSlice = createSlice( {
	name: 'config',
	initialState,
	reducers: {
		setCssClasses: ( state, action ) => {
			state.cssClasses = action.payload;
		},
	},
} );

export const { setCssClasses } = configSlice.actions;

export const selectCssClasses = ( state ) => state.config.cssClasses;

export default configSlice.reducer;
