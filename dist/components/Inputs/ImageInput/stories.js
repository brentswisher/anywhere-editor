'use strict';

Object.defineProperty( exports, '__esModule', {
	value: true,
} );
exports.default = exports._default = void 0;

var _react = require( 'react' );

var _ = _interopRequireDefault( require( './' ) );

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray( arr, i ) {
	return (
		_arrayWithHoles( arr ) ||
		_iterableToArrayLimit( arr, i ) ||
		_unsupportedIterableToArray( arr, i ) ||
		_nonIterableRest()
	);
}

function _nonIterableRest() {
	throw new TypeError(
		'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
	);
}

function _unsupportedIterableToArray( o, minLen ) {
	if ( ! o ) return;
	if ( typeof o === 'string' ) return _arrayLikeToArray( o, minLen );
	var n = Object.prototype.toString.call( o ).slice( 8, -1 );
	if ( n === 'Object' && o.constructor ) n = o.constructor.name;
	if ( n === 'Map' || n === 'Set' ) return Array.from( o );
	if (
		n === 'Arguments' ||
		/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( n )
	)
		return _arrayLikeToArray( o, minLen );
}

function _arrayLikeToArray( arr, len ) {
	if ( len == null || len > arr.length ) len = arr.length;
	for ( var i = 0, arr2 = new Array( len ); i < len; i++ ) {
		arr2[ i ] = arr[ i ];
	}
	return arr2;
}

function _iterableToArrayLimit( arr, i ) {
	var _i =
		arr == null
			? null
			: ( typeof Symbol !== 'undefined' && arr[ Symbol.iterator ] ) ||
			  arr[ '@@iterator' ];
	if ( _i == null ) return;
	var _arr = [];
	var _n = true;
	var _d = false;
	var _s, _e;
	try {
		for (
			_i = _i.call( arr );
			! ( _n = ( _s = _i.next() ).done );
			_n = true
		) {
			_arr.push( _s.value );
			if ( i && _arr.length === i ) break;
		}
	} catch ( err ) {
		_d = true;
		_e = err;
	} finally {
		try {
			if ( ! _n && _i[ 'return' ] != null ) _i[ 'return' ]();
		} finally {
			if ( _d ) throw _e;
		}
	}
	return _arr;
}

function _arrayWithHoles( arr ) {
	if ( Array.isArray( arr ) ) return arr;
}

var _default2 = {
	title: 'Inputs/ImageInput',
	component: _.default,
	args: {
		name: 'image',
		label: 'Image:',
		labelHidden: false,
		helpText: '',
		sizes: [ 500, 1000, 1200, 1500 ],
		thumbnailPath: '',
		maxFileSize: 300000,
	},
};
exports.default = _default2;

var _default = function _default( args ) {
	var _args$src;

	var _useState = ( 0, _react.useState )(
			( _args$src = args.src ) !== null && _args$src !== void 0
				? _args$src
				: ''
		),
		_useState2 = _slicedToArray( _useState, 2 ),
		src = _useState2[ 0 ],
		setSrc = _useState2[ 1 ];

	return /*#__PURE__*/ React.createElement( _.default, {
		label: args.label,
		labelHidden: args.labelHidden,
		name: args.name,
		helpText: args.helpText,
		setError: function setError() {
			return null;
		},
		maxFileSize: args.maxFileSize,
		sizes: args.sizes,
		thumbnailPath: args.thumbnailPath,
		src: src,
		onChange: setSrc,
	} );
};

exports._default = _default;
