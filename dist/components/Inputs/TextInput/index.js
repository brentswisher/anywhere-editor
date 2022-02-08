'use strict';

Object.defineProperty( exports, '__esModule', {
	value: true,
} );
exports.TextInput = TextInput;
exports.default = void 0;

var _react = _interopRequireDefault( require( 'react' ) );

var _ = require( '../' );

var _reactRedux = require( 'react-redux' );

var _configSlice = require( '../../LayoutEditor/configSlice' );

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function TextInput( _ref ) {
	var label = _ref.label,
		name = _ref.name,
		autoFocus = _ref.autoFocus,
		value = _ref.value,
		_onChange = _ref.onChange,
		labelHidden = _ref.labelHidden,
		helpText = _ref.helpText;
	var cssClasses = ( 0, _reactRedux.useSelector )(
		_configSlice.selectCssClasses
	);
	return /*#__PURE__*/ _react.default.createElement(
		_react.default.Fragment,
		null,
		/*#__PURE__*/ _react.default.createElement(
			_.FieldLabel,
			{
				htmlFor: name,
				visuallyHidden: labelHidden,
			},
			label
		),
		/*#__PURE__*/ _react.default.createElement( 'input', {
			type: 'text',
			autoFocus: autoFocus,
			name: name,
			id: name,
			value: value,
			className: cssClasses[ 'input' ],
			onChange: function onChange( e ) {
				return _onChange( e.target.value );
			},
		} ),
		helpText &&
			/*#__PURE__*/ _react.default.createElement(
				'span',
				{
					className: cssClasses[ 'help-text' ],
				},
				' ',
				helpText,
				' '
			)
	);
}

var _default = TextInput;
exports.default = _default;
