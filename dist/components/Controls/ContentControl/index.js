'use strict';

function _typeof( obj ) {
	'@babel/helpers - typeof';
	return (
		( _typeof =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function ( obj ) {
						return typeof obj;
				  }
				: function ( obj ) {
						return obj &&
							'function' == typeof Symbol &&
							obj.constructor === Symbol &&
							obj !== Symbol.prototype
							? 'symbol'
							: typeof obj;
				  } ),
		_typeof( obj )
	);
}

Object.defineProperty( exports, '__esModule', {
	value: true,
} );
exports.ContentControl = ContentControl;
exports.default = void 0;

var _react = _interopRequireWildcard( require( 'react' ) );

var _Inputs = require( '../../Inputs' );

var _EditModal = _interopRequireDefault( require( '../../EditModal' ) );

var _reactRedux = require( 'react-redux' );

var _configSlice = require( '../../LayoutEditor/configSlice' );

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache( nodeInterop ) {
	if ( typeof WeakMap !== 'function' ) return null;
	var cacheBabelInterop = new WeakMap();
	var cacheNodeInterop = new WeakMap();
	return ( _getRequireWildcardCache = function _getRequireWildcardCache(
		nodeInterop
	) {
		return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	} )( nodeInterop );
}

function _interopRequireWildcard( obj, nodeInterop ) {
	if ( ! nodeInterop && obj && obj.__esModule ) {
		return obj;
	}
	if (
		obj === null ||
		( _typeof( obj ) !== 'object' && typeof obj !== 'function' )
	) {
		return { default: obj };
	}
	var cache = _getRequireWildcardCache( nodeInterop );
	if ( cache && cache.has( obj ) ) {
		return cache.get( obj );
	}
	var newObj = {};
	var hasPropertyDescriptor =
		Object.defineProperty && Object.getOwnPropertyDescriptor;
	for ( var key in obj ) {
		if (
			key !== 'default' &&
			Object.prototype.hasOwnProperty.call( obj, key )
		) {
			var desc = hasPropertyDescriptor
				? Object.getOwnPropertyDescriptor( obj, key )
				: null;
			if ( desc && ( desc.get || desc.set ) ) {
				Object.defineProperty( newObj, key, desc );
			} else {
				newObj[ key ] = obj[ key ];
			}
		}
	}
	newObj.default = obj;
	if ( cache ) {
		cache.set( obj, newObj );
	}
	return newObj;
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

function ContentControl( _ref ) {
	var name = _ref.name,
		title = _ref.title,
		content = _ref.content,
		setData = _ref.setData,
		required = _ref.required;

	var _useState = ( 0, _react.useState )( false ),
		_useState2 = _slicedToArray( _useState, 2 ),
		editing = _useState2[ 0 ],
		setEditing = _useState2[ 1 ],
		toggleEditable = function toggleEditable() {
			return setEditing( ! editing );
		};

	if ( editing ) {
		return /*#__PURE__*/ _react.default.createElement( ContentEditor, {
			title: title,
			content: content,
			setData: setData,
			toggleEditable: toggleEditable,
			name: name,
		} );
	}

	return /*#__PURE__*/ _react.default.createElement( ContentDisplay, {
		title: title,
		content: content,
		onClick: toggleEditable,
	} );
}

ContentControl.defaultProps = {
	title: '',
	content: '',
	editing: false,
};

function ContentEditor( props ) {
	var modules = {
			toolbar: [
				[ 'bold', 'italic' ],
				[
					{
						list: 'ordered',
					},
					{
						list: 'bullet',
					},
				],
				[ 'link' ],
				[ 'clean' ],
			],
		},
		_useState3 = ( 0, _react.useState )( props.title ),
		_useState4 = _slicedToArray( _useState3, 2 ),
		title = _useState4[ 0 ],
		setTitle = _useState4[ 1 ],
		_useState5 = ( 0, _react.useState )( props.content ),
		_useState6 = _slicedToArray( _useState5, 2 ),
		content = _useState6[ 0 ],
		setContent = _useState6[ 1 ],
		_useState7 = ( 0, _react.useState )( '' ),
		_useState8 = _slicedToArray( _useState7, 2 ),
		error = _useState8[ 0 ],
		setError = _useState8[ 1 ],
		saveChanges = function saveChanges( e ) {
			e.preventDefault();

			if ( props.required && ! content.length ) {
				setError( 'Please enter some content to continue' );
			} else {
				props.setData( {
					title: title,
					content: content,
				} );
				setError( '' );
				props.toggleEditable();
			}
		},
		cancelChanges = function cancelChanges() {
			return props.toggleEditable();
		};

	return /*#__PURE__*/ _react.default.createElement(
		_EditModal.default,
		{
			saveChanges: saveChanges,
			cancelChanges: cancelChanges,
			error: error,
		},
		/*#__PURE__*/ _react.default.createElement( _Inputs.TextInput, {
			fieldName: 'ContentTitle',
			fieldLabel: 'Heading',
			autoFocus: true,
			value: title,
			onChange: setTitle,
		} ),
		/*#__PURE__*/ _react.default.createElement( _Inputs.RichTextInput, {
			name: 'ContentContent',
			label: 'Content',
			modules: modules,
			value: content,
			onChange: setContent,
		} )
	);
}

function ContentDisplay( props ) {
	var cssClasses = ( 0, _reactRedux.useSelector )(
		_configSlice.selectCssClasses
	);
	return /*#__PURE__*/ _react.default.createElement(
		'div',
		{
			onClick: props.onClick,
		},
		props.title &&
			/*#__PURE__*/ _react.default.createElement(
				'h2',
				{
					className: cssClasses[ 'content-heading' ],
				},
				props.title
			),
		/*#__PURE__*/ _react.default.createElement( 'div', {
			className: cssClasses[ 'content-body' ],
			dangerouslySetInnerHTML: {
				__html: props.content
					? props.content
					: '<br /><p style="text-align:center;" class="stop-drop-cap">[Enter Content Here]</p><br />',
			},
		} )
	);
}

var _default = ContentControl;
exports.default = _default;
