import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cssClasses: {
		active: 'is-active',
		'block-actions-active': 'menu chunkActions chunkActions-full is-active',
		'block-actions': 'menu chunkActions chunkActions-full',
		'block-list': 'block-list',
		'border-both': 'border-both',
		'border-bottom': 'border-bottom',
		'border-top': 'border-top',
		'button-alert': 'button alert',
		'button-group-alert': 'button alert',
		'button-group-primary': 'button primary',
		'button-group-secondary': 'button secondary',
		'button-group-success': 'button success',
		'button-group': 'button-group',
		'button-primary': 'button primary',
		'button-secondary': 'button secondary',
		'button-success': 'button success',
		// //Todo: these will be generated by the colors config
		'color-*': 'color-*',
		'color-picker-sample': 'color-picker-sample',
		'color-picker': 'color-picker',
		'content-body': '',
		'content-buttons': 'position-full content-buttons button-group',
		'content-heading': '',
		'control-container-active': 'block is-active',
		'control-container': 'block',
		'dropdown-button-active': 'button primary',
		'dropdown-button': 'button secondary',
		'dropdown-list-open': 'menu dropdown visible',
		'dropdown-list': 'menu dropdown',
		'error-container': 'callout alert',
		'gallery-caption': 'gallery-caption',
		'gallery-item': 'gallery-item',
		'gallery-items': 'gallery-items',
		gallery: 'gallery',
		'heading-1': 'article-heading',
		'heading-2': 'article-subheading',
		'heading-3': '',
		'heading-4': '',
		'help-text': 'help-text',
		'input-file': '',
		'input-select': '',
		'input-text': '',
		input: '',
		label: '',
		'menu-dropdown': 'menu dropdown',
		'modal-overlay': 'modal-overlay',
		modal: 'modal',
		'no-drop-cap': 'stop-drop-cap',
		'photo-caption': 'photo-caption',
		'photo-mobile-full': 'photo-mobile-full',
		'photo-mobile-match': 'photo-mobile-match',
		photo: 'photo',
		'position-full-page': 'position-full-page',
		'position-full': 'position-full',
		'position-left': 'position-left',
		'position-offset-full': 'position-offset-full',
		'position-offset-left': 'position-offset-left',
		'position-offset-right': 'position-offset-right',
		'position-right': 'position-right',
		'text-align-left': 'text-left',
		'text-align-right': 'text-right',
		'text-align-center': 'text-center',
		'pull-quote-author': 'pull-quote-author',
		'pull-quote-content': '',
		'pull-quote-icon': 'pull-quote-icon',
		'pull-quote-spacing-large': 'pull-quote-spacing-large',
		'pull-quote-title': '',
		'pull-quote': 'pull-quote',
		'social-share-container': 'social-share-container',
		'social-share-icon': 'social-share-icon',
		'sr-only': 'show-for-sr',
		'tab-content': 'tabs-content',
		'tab-group': 'tabs',
		'tab-panel-active': 'tabs-panel is-active',
		'tab-panel': 'tabs-panel',
		'tab-title-active': 'tabs-title is-active',
		'tab-title': 'tabs-title',
		'text-center': 'text-center',
		'text-left': 'text-left',
		'text-right': 'text-right',
		'video-container': 'responsive-embed widescreen',
		visible: 'visible',
	},
	colors: {
		black: '#1E212B',
		orange: '#fa9f42',
		teal: '#297373',
		'light-blue': '#adfcf9',
		gray: '#9a8f97',
		red: '#ad343e',
	},
};

export const configSlice = createSlice( {
	name: 'config',
	initialState,
	reducers: {
		mergeCssClasses: ( state, action ) => {
			state.cssClasses = {
				...state.cssClasses,
				...action.payload,
			};
		},
		setCssClasses: ( state, action ) => {
			state.cssClasses = { ...action.payload };
		},
		setColors: ( state, action ) => {
			state.colors = { ...action.payload };
		},
	},
} );

export const { setConfig, mergeCssClasses, setCssClasses, setColors } =
	configSlice.actions;

export const selectCssClasses = ( state ) => state.config.cssClasses;
export const selectColors = ( state ) => state.config.colors;

export default configSlice.reducer;
