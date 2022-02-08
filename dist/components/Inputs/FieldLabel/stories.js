'use strict';

Object.defineProperty( exports, '__esModule', {
	value: true,
} );
exports.default = exports._default = void 0;

var _react = _interopRequireDefault( require( 'react' ) );

var _ = _interopRequireDefault( require( './' ) );

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var _default2 = {
	title: 'Inputs/FieldLabel',
	component: _.default,
	args: {
		htmlFor: 'title',
		visuallyHidden: false,
		labelText: 'Title:',
	},
};
exports.default = _default2;

var _default = function _default( args ) {
	return /*#__PURE__*/ _react.default.createElement(
		_react.default.Fragment,
		null,
		/*#__PURE__*/ _react.default.createElement(
			_.default,
			{
				htmlFor: args.htmlFor,
				visuallyHidden: args.visuallyHidden,
			},
			args.labelText
		),
		/*#__PURE__*/ _react.default.createElement( 'input', {
			type: 'text',
			name: args.htmlFor,
			id: args.htmlFor,
		} )
	);
};

exports._default = _default;
