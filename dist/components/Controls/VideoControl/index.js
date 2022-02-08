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
exports.VideoControl = VideoControl;
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

function VideoControl( _ref ) {
	var name = _ref.name,
		videoId = _ref.videoId,
		title = _ref.title,
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
		return /*#__PURE__*/ _react.default.createElement( VideoEditor, {
			videoId: videoId,
			title: title,
			name: name,
			setData: setData,
			toggleEditable: toggleEditable,
		} );
	}

	return /*#__PURE__*/ _react.default.createElement( VideoDisplay, {
		videoId: videoId,
		title: title,
		name: name,
		onClick: function onClick() {
			return toggleEditable();
		},
	} );
}

VideoControl.defaultProps = {
	videoId: '',
	title: '',
	editing: false,
};

function VideoEditor( props ) {
	var _useState3 = ( 0, _react.useState )( props.title ),
		_useState4 = _slicedToArray( _useState3, 2 ),
		title = _useState4[ 0 ],
		setTitle = _useState4[ 1 ],
		_useState5 = ( 0, _react.useState )( props.videoId ),
		_useState6 = _slicedToArray( _useState5, 2 ),
		videoId = _useState6[ 0 ],
		setVideoId = _useState6[ 1 ],
		_useState7 = ( 0, _react.useState )( '' ),
		_useState8 = _slicedToArray( _useState7, 2 ),
		error = _useState8[ 0 ],
		setError = _useState8[ 1 ],
		videoIdRegex = /[\w-]{11}/,
		validUrlRegex = /(?:https:\/\/(www)?)?(?:youtube.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([\w-]{11})/,
		saveChanges = function saveChanges( e ) {
			e.preventDefault();

			if ( videoId.length && ! title.length ) {
				setError( 'Please enter the video title text to continue' );
			} else if ( ! videoId.match( videoIdRegex ) ) {
				setError( 'Please enter the valide youtube videoId' );
			} else {
				props.setData( {
					videoId: videoId,
					title: title,
				} );
				setError( '' );
				props.toggleEditable();
			}
		},
		cancelChanges = function cancelChanges() {
			return props.toggleEditable();
		},
		processVideoId = function processVideoId( url ) {
			var videoIdMatch = url.match( validUrlRegex );
			console.log( videoIdMatch );

			if ( videoIdMatch && videoIdMatch.length === 3 ) {
				setVideoId( videoIdMatch[ 2 ] );
			} else {
				setVideoId( url );
			}
		};

	return /*#__PURE__*/ _react.default.createElement(
		_EditModal.default,
		{
			saveChanges: saveChanges,
			cancelChanges: cancelChanges,
			error: error,
		},
		/*#__PURE__*/ _react.default.createElement( _Inputs.TextInput, {
			name: 'videoId',
			label: 'YouTube VideoId',
			helpText:
				'Please enter the YouTube videoId or copy/paste the url of the video you wish to use.',
			autoFocus: true,
			value: videoId,
			onChange: processVideoId,
		} ),
		/*#__PURE__*/ _react.default.createElement( _Inputs.TextInput, {
			name: 'title',
			label: 'Video Title (For Screen Readers)',
			value: title,
			onChange: setTitle,
		} )
	);
}

function VideoDisplay( props ) {
	var cssClasses = ( 0, _reactRedux.useSelector )(
		_configSlice.selectCssClasses
	);

	if ( props.videoId ) {
		return /*#__PURE__*/ _react.default.createElement(
			'div',
			{
				className: cssClasses[ 'video-container' ],
				onClick: props.onClick,
			},
			/*#__PURE__*/ _react.default.createElement( 'img', {
				src: 'https://img.youtube.com/vi/'.concat(
					props.videoId,
					'/0.jpg'
				),
				alt: props.title,
				style: {
					width: '100%',
				},
			} )
		);
	}

	return /*#__PURE__*/ _react.default.createElement(
		'div',
		{
			onClick: props.onClick,
		},
		/*#__PURE__*/ _react.default.createElement( 'br', null ),
		/*#__PURE__*/ _react.default.createElement(
			'p',
			{
				className: cssClasses[ 'no-drop-cap' ],
			},
			'[Click here to select video]'
		),
		/*#__PURE__*/ _react.default.createElement( 'br', null )
	);
}

var _default = VideoControl;
exports.default = _default;
