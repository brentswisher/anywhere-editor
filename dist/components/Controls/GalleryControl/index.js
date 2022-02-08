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
exports.GalleryControl = GalleryControl;
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

function _createForOfIteratorHelper( o, allowArrayLike ) {
	var it =
		( typeof Symbol !== 'undefined' && o[ Symbol.iterator ] ) ||
		o[ '@@iterator' ];
	if ( ! it ) {
		if (
			Array.isArray( o ) ||
			( it = _unsupportedIterableToArray( o ) ) ||
			( allowArrayLike && o && typeof o.length === 'number' )
		) {
			if ( it ) o = it;
			var i = 0;
			var F = function F() {};
			return {
				s: F,
				n: function n() {
					if ( i >= o.length ) return { done: true };
					return { done: false, value: o[ i++ ] };
				},
				e: function e( _e2 ) {
					throw _e2;
				},
				f: F,
			};
		}
		throw new TypeError(
			'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
		);
	}
	var normalCompletion = true,
		didErr = false,
		err;
	return {
		s: function s() {
			it = it.call( o );
		},
		n: function n() {
			var step = it.next();
			normalCompletion = step.done;
			return step;
		},
		e: function e( _e3 ) {
			didErr = true;
			err = _e3;
		},
		f: function f() {
			try {
				if ( ! normalCompletion && it.return != null ) it.return();
			} finally {
				if ( didErr ) throw err;
			}
		},
	};
}

function ownKeys( object, enumerableOnly ) {
	var keys = Object.keys( object );
	if ( Object.getOwnPropertySymbols ) {
		var symbols = Object.getOwnPropertySymbols( object );
		enumerableOnly &&
			( symbols = symbols.filter( function ( sym ) {
				return Object.getOwnPropertyDescriptor(
					object,
					sym
				).enumerable;
			} ) ),
			keys.push.apply( keys, symbols );
	}
	return keys;
}

function _objectSpread( target ) {
	for ( var i = 1; i < arguments.length; i++ ) {
		var source = null != arguments[ i ] ? arguments[ i ] : {};
		i % 2
			? ownKeys( Object( source ), ! 0 ).forEach( function ( key ) {
					_defineProperty( target, key, source[ key ] );
			  } )
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(
					target,
					Object.getOwnPropertyDescriptors( source )
			  )
			: ownKeys( Object( source ) ).forEach( function ( key ) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor( source, key )
					);
			  } );
	}
	return target;
}

function _defineProperty( obj, key, value ) {
	if ( key in obj ) {
		Object.defineProperty( obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true,
		} );
	} else {
		obj[ key ] = value;
	}
	return obj;
}

function _toConsumableArray( arr ) {
	return (
		_arrayWithoutHoles( arr ) ||
		_iterableToArray( arr ) ||
		_unsupportedIterableToArray( arr ) ||
		_nonIterableSpread()
	);
}

function _nonIterableSpread() {
	throw new TypeError(
		'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
	);
}

function _iterableToArray( iter ) {
	if (
		( typeof Symbol !== 'undefined' && iter[ Symbol.iterator ] != null ) ||
		iter[ '@@iterator' ] != null
	)
		return Array.from( iter );
}

function _arrayWithoutHoles( arr ) {
	if ( Array.isArray( arr ) ) return _arrayLikeToArray( arr );
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

function GalleryControl( _ref ) {
	var images = _ref.images,
		title = _ref.title,
		caption = _ref.caption,
		captionPosition = _ref.captionPosition,
		headingPosition = _ref.headingPosition,
		thumbnailPath = _ref.thumbnailPath,
		setData = _ref.setData;

	var maxImages = 3,
		_useState = ( 0, _react.useState )( false ),
		_useState2 = _slicedToArray( _useState, 2 ),
		editing = _useState2[ 0 ],
		setEditing = _useState2[ 1 ],
		toggleEditable = function toggleEditable() {
			return setEditing( ! editing );
		};

	if ( editing ) {
		return /*#__PURE__*/ _react.default.createElement( GalleryEditor, {
			images: images,
			maxImages: maxImages,
			title: title,
			caption: caption,
			captionPosition: captionPosition,
			headingPosition: headingPosition,
			setData: setData,
			toggleEditable: toggleEditable,
		} );
	}

	return /*#__PURE__*/ _react.default.createElement( GalleryDisplay, {
		images: images,
		thumbnailPath: thumbnailPath,
		title: title,
		caption: caption,
		captionPosition: captionPosition,
		headingPosition: headingPosition,
		setData: setData,
		onClick: toggleEditable,
	} );
}

GalleryControl.defaultProps = {
	images: [
		{
			src: {},
			sizes: [ 500, 770, 1200, 2000 ],
			alt: '',
			hasUpload: false,
			caption: '',
		},
	],
	thumbnailPath: '',
	title: '',
	caption: '',
	captionPosition: 'right',
	headingPosition: 'left',
	editing: false,
};

function GalleryEditor( props ) {
	var cssClasses = ( 0, _reactRedux.useSelector )(
			_configSlice.selectCssClasses
		),
		_useState3 = ( 0, _react.useState )( props.title ),
		_useState4 = _slicedToArray( _useState3, 2 ),
		title = _useState4[ 0 ],
		setTitle = _useState4[ 1 ],
		_useState5 = ( 0, _react.useState )( props.caption ),
		_useState6 = _slicedToArray( _useState5, 2 ),
		caption = _useState6[ 0 ],
		setCaption = _useState6[ 1 ],
		_useState7 = ( 0, _react.useState )( props.captionPosition ),
		_useState8 = _slicedToArray( _useState7, 2 ),
		captionPosition = _useState8[ 0 ],
		setCaptionPosition = _useState8[ 1 ],
		_useState9 = ( 0, _react.useState )( props.headingPosition ),
		_useState10 = _slicedToArray( _useState9, 2 ),
		headingPosition = _useState10[ 0 ],
		setHeadingPosition = _useState10[ 1 ],
		_useState11 = ( 0, _react.useState )( 0 ),
		_useState12 = _slicedToArray( _useState11, 2 ),
		currentTab = _useState12[ 0 ],
		setCurrentTab = _useState12[ 1 ],
		_useState13 = ( 0, _react.useState )( '' ),
		_useState14 = _slicedToArray( _useState13, 2 ),
		error = _useState14[ 0 ],
		setError = _useState14[ 1 ],
		imageReducer = function imageReducer( state, action ) {
			switch ( action.type ) {
				case 'add':
					return [].concat( _toConsumableArray( state ), [
						action.image,
					] );

				case 'remove':
					return state.filter( function ( images, index ) {
						return index != action.index;
					} );

				case 'updateSrc':
					return state.map( function ( image, index ) {
						return index === action.index
							? _objectSpread(
									_objectSpread( {}, image ),
									{},
									{
										src: action.value,
										hasUpload: true,
									}
							  )
							: image;
					} );

				case 'updateAlt':
					return state.map( function ( image, index ) {
						return index === action.index
							? _objectSpread(
									_objectSpread( {}, image ),
									{},
									{
										alt: action.value,
									}
							  )
							: image;
					} );

				case 'updateCaption':
					return state.map( function ( image, index ) {
						return index === action.index
							? _objectSpread(
									_objectSpread( {}, image ),
									{},
									{
										caption: action.value,
									}
							  )
							: image;
					} );

				default:
					return state;
			}
		},
		_useReducer = ( 0, _react.useReducer )( imageReducer, props.images ),
		_useReducer2 = _slicedToArray( _useReducer, 2 ),
		images = _useReducer2[ 0 ],
		dispatchImage = _useReducer2[ 1 ],
		addImage = function addImage() {
			if ( images.length < props.maxImages ) {
				dispatchImage( {
					type: 'add',
					image: {
						src: {},
						sizes: [ 500, 770, 1200, 2000 ],
						alt: '',
						hasUpload: false,
						caption: '',
					},
				} );
			} else {
				setError(
					'You may currently only add up to  '.concat(
						props.maxImages,
						' images to a gallery'
					)
				);
			}
		},
		saveChanges = function saveChanges( e ) {
			e.preventDefault(); // Validation

			// Validation
			var counter = 0,
				errorFound = false; // We can't just check errorMessage because if may not have been updated yet

			// We can't just check errorMessage because if may not have been updated yet
			var _iterator = _createForOfIteratorHelper( images ),
				_step;

			try {
				for ( _iterator.s(); ! ( _step = _iterator.n() ).done;  ) {
					var image = _step.value;

					if ( ! Object.keys( image.src ).length ) {
						setError(
							'Please upload a the photo for image '.concat(
								counter + 1,
								' or remove it to continue'
							)
						);
						setCurrentTab( counter );
						errorFound = true;
						break;
					} else if ( ! image.alt.length ) {
						setError(
							'Please enter the photo alt text for image '.concat(
								counter + 1,
								' to continue'
							)
						);
						setCurrentTab( counter );
						errorFound = true;
						break;
					}

					counter++;
				}
			} catch ( err ) {
				_iterator.e( err );
			} finally {
				_iterator.f();
			}

			if ( ! errorFound ) {
				props.setData( {
					images: images,
					thumbnailPath: props.thumbnailPath,
					title: title,
					caption: caption,
					captionPosition: captionPosition,
					headingPosition: headingPosition,
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
			cancelChanges: cancelChanges,
			saveChanges: saveChanges,
			error: error,
		},
		/*#__PURE__*/ _react.default.createElement( _Inputs.TextInput, {
			name: 'GalleryTitle',
			label: 'Heading',
			autoFocus: true,
			value: title,
			onChange: setTitle,
		} ),
		/*#__PURE__*/ _react.default.createElement( _Inputs.SelectInput, {
			name: 'headingPosition',
			label: 'Heading Alignment',
			value: headingPosition,
			options: [
				{
					value: 'left',
					title: 'Left',
				},
				{
					value: 'right',
					title: 'Right',
				},
				{
					value: 'center',
					title: 'Centered',
				},
			],
			onChange: setHeadingPosition,
		} ),
		/*#__PURE__*/ _react.default.createElement( _Inputs.RichTextInput, {
			name: 'GalleryCaption',
			label: 'Caption For Gallery',
			autoFocus: true,
			value: caption,
			onChange: setCaption,
		} ),
		/*#__PURE__*/ _react.default.createElement( _Inputs.SelectInput, {
			name: 'captionPosition',
			label: 'Caption Alignment',
			value: captionPosition,
			options: [
				{
					value: 'left',
					title: 'Left',
				},
				{
					value: 'right',
					title: 'Right',
				},
				{
					value: 'center',
					title: 'Centered',
				},
			],
			onChange: setCaptionPosition,
		} ),
		/*#__PURE__*/ _react.default.createElement(
			'ul',
			{
				className: cssClasses[ 'tab-group' ],
			},
			images.map( function ( image, index ) {
				return /*#__PURE__*/ _react.default.createElement(
					'li',
					{
						key: index,
					},
					/*#__PURE__*/ _react.default.createElement(
						'a',
						{
							href: '#panel'.concat( index ),
							className:
								index === currentTab
									? cssClasses[ 'tab-title-active' ]
									: cssClasses[ 'tab-title' ],
							onClick: function onClick() {
								return setCurrentTab( index );
							},
						},
						'Image ',
						index + 1
					)
				);
			} )
		),
		/*#__PURE__*/ _react.default.createElement(
			'div',
			{
				className: cssClasses[ 'tab-content' ],
			},
			images.map( function ( image, index ) {
				return /*#__PURE__*/ _react.default.createElement(
					'div',
					{
						className:
							index === currentTab
								? cssClasses[ 'tab-panel-active' ]
								: cssClasses[ 'tab-panel' ],
						key: index,
					},
					/*#__PURE__*/ _react.default.createElement(
						_Inputs.ImageInput,
						{
							name: 'image_'.concat( index + 1 ),
							label: 'Image_'.concat( index + 1 ),
							src: images[ index ].src,
							sizes: images[ index ].sizes,
							thumbnailPath: props.thumbnailPath,
							onChange: function onChange( e ) {
								return dispatchImage( {
									type: 'updateSrc',
									index: currentTab,
									value: e,
								} );
							},
							setError: setError,
						}
					),
					/*#__PURE__*/ _react.default.createElement(
						_Inputs.TextInput,
						{
							name: 'image_'.concat( index + 1, '_alt' ),
							label: 'Image '.concat( index + 1, ' Alt Text' ),
							value: images[ index ].alt,
							onChange: function onChange( e ) {
								return dispatchImage( {
									type: 'updateAlt',
									index: currentTab,
									value: e,
								} );
							},
						}
					),
					/*#__PURE__*/ _react.default.createElement(
						_Inputs.TextInput,
						{
							name: 'image_'.concat( index + 1, '_caption' ),
							label: 'Image '.concat( index + 1, ' Caption' ),
							value: images[ index ].caption,
							onChange: function onChange( e ) {
								return dispatchImage( {
									type: 'updateCaption',
									index: currentTab,
									value: e,
								} );
							},
						}
					),
					/*#__PURE__*/ _react.default.createElement(
						'button',
						{
							onClick: addImage,
							className: cssClasses[ 'button-success' ],
						},
						'Add Image'
					),
					/*#__PURE__*/ _react.default.createElement(
						'button',
						{
							onClick: function onClick() {
								return dispatchImage( {
									type: 'remove',
									index: currentTab,
								} );
							},
							className: cssClasses[ 'button-alert' ],
						},
						'Remove Image'
					)
				);
			} )
		)
	);
}

function GalleryDisplay( props ) {
	var cssClasses = ( 0, _reactRedux.useSelector )(
		_configSlice.selectCssClasses
	);
	return /*#__PURE__*/ _react.default.createElement(
		'div',
		{
			className: cssClasses[ 'gallery' ],
			onClick: props.onClick,
		},
		props.title &&
			/*#__PURE__*/ _react.default.createElement(
				'h2',
				{
					className:
						cssClasses[ 'text-'.concat( props.headingPosition ) ],
				},
				' ',
				props.title,
				' '
			),
		/*#__PURE__*/ _react.default.createElement(
			'div',
			{
				className: cssClasses[ 'gallery-items' ],
			},
			props.images.length && Object.keys( props.images[ 0 ].src ).length
				? props.images.map( function ( image, index ) {
						var displaySrc =
							( props.thumbnailPath !== ''
								? ''.concat( props.thumbnailPath, '/' )
								: '' ) +
							image.src[ image.sizes[ image.sizes.length - 1 ] ];
						return /*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: cssClasses[ 'gallery-item' ],
								key: index,
							},
							/*#__PURE__*/ _react.default.createElement( 'img', {
								src: displaySrc,
								alt: image.alt,
							} ),
							image.caption &&
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: ''
											.concat(
												cssClasses[ 'gallery-item' ],
												' '
											)
											.concat(
												cssClasses[
													'text-' +
														props.captionPosition
												]
											),
										dangerouslySetInnerHTML: {
											__html: image.caption,
										},
									}
								)
						);
				  } )
				: /*#__PURE__*/ _react.default.createElement(
						'p',
						{
							style: {
								margin: '1em 0',
							},
						},
						'[Click here to upload images to the gallery]'
				  )
		),
		props.caption &&
			props.caption.length &&
			/*#__PURE__*/ _react.default.createElement( 'div', {
				className: ''
					.concat( cssClasses[ 'gallery-item' ], ' ' )
					.concat( cssClasses[ 'text-' + props.captionPosition ] ),
				dangerouslySetInnerHTML: {
					__html: props.caption,
				},
			} )
	);
}

var _default = GalleryControl;
exports.default = _default;
