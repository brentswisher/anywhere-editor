'use strict';

Object.defineProperty( exports, '__esModule', {
	value: true,
} );
exports.store = void 0;

var _toolkit = require( '@reduxjs/toolkit' );

var _layoutSlice = _interopRequireDefault(
	require( '../components/LayoutEditor/layoutSlice' )
);

var _configSlice = _interopRequireDefault(
	require( '../components/LayoutEditor/configSlice' )
);

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var store = ( 0, _toolkit.configureStore )( {
	reducer: {
		layout: _layoutSlice.default,
		config: _configSlice.default,
	},
} );
exports.store = store;
