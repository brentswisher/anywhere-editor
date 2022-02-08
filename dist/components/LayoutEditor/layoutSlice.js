'use strict';

Object.defineProperty( exports, '__esModule', {
	value: true,
} );
exports.setRowPosition = exports.setContentItemData = exports.setContent = exports.selectRow = exports.selectContent = exports.removeContentItem = exports.moveItem = exports.layoutSlice = exports.default = exports.addContentItem = void 0;

var _toolkit = require( '@reduxjs/toolkit' );

var initialState = {
	content: [],
};
var layoutSlice = ( 0, _toolkit.createSlice )( {
	name: 'layout',
	initialState: initialState,
	reducers: {
		moveItem: function moveItem( state, action ) {
			var _action$payload = action.payload,
				currentIndex = _action$payload.currentIndex,
				newIndex = _action$payload.newIndex,
				item = state.content[ currentIndex ];
			state.content.splice( currentIndex, 1 );
			state.content.splice( newIndex, 0, item );
		},
		addContentItem: function addContentItem( state, action ) {
			// Reminder: Redux Toolkit allows us to write "mutating" logic in reducers.
			// It doesn't actually mutate the state because it uses the Immer library
			state.content.push( action.payload );
		},
		removeContentItem: function removeContentItem( state, action ) {
			state.content.splice( action.payload, 1 );
		},
		setContentItemData: function setContentItemData( state, action ) {
			var _action$payload2 = action.payload,
				rowIndex = _action$payload2.rowIndex,
				columnIndex = _action$payload2.columnIndex,
				data = _action$payload2.data;
			state.content[ rowIndex ].innerContent[ columnIndex ].data = data;
		},
		setRowPosition: function setRowPosition( state, action ) {
			var _action$payload3 = action.payload,
				rowIndex = _action$payload3.rowIndex,
				position = _action$payload3.position;
			console.log( state.content );
			state.content[ rowIndex ].position = position;
		},
		setContent: function setContent( state, action ) {
			state.content = action.payload;
		},
	},
} );
exports.layoutSlice = layoutSlice;
var _layoutSlice$actions = layoutSlice.actions,
	moveItem = _layoutSlice$actions.moveItem,
	addContentItem = _layoutSlice$actions.addContentItem,
	removeContentItem = _layoutSlice$actions.removeContentItem,
	setContentItemData = _layoutSlice$actions.setContentItemData,
	setContent = _layoutSlice$actions.setContent,
	setRowPosition = _layoutSlice$actions.setRowPosition;
exports.setRowPosition = setRowPosition;
exports.setContent = setContent;
exports.setContentItemData = setContentItemData;
exports.removeContentItem = removeContentItem;
exports.addContentItem = addContentItem;
exports.moveItem = moveItem;

var selectContent = function selectContent( state ) {
	return state.layout.content;
};

exports.selectContent = selectContent;

var selectRow = function selectRow( state, id ) {
	return state.layout.content.find( function ( row ) {
		return row.id === id;
	} );
};

exports.selectRow = selectRow;
var _default = layoutSlice.reducer;
exports.default = _default;
