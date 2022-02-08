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

var _layoutSlice = _interopRequireWildcard( require( '../layoutSlice' ) );

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

describe( 'Layout Reducer', function () {
	var initialState = {
		content: [
			{
				id: '1111',
				innerContent: [
					{
						id: 'aaaa',
						type: 'Heading',
						data: {
							text: 'Apple',
							level: 1,
						},
					},
				],
			},
			{
				id: '2222',
				innerContent: [
					{
						id: 'bbbb',
						type: 'Heading',
						data: {
							text: 'Kiwi',
							level: 1,
						},
					},
				],
			},
			{
				id: '3333',
				innerContent: [
					{
						id: 'cccc',
						type: 'Heading',
						data: {
							text: 'Banana',
							level: 1,
						},
					},
				],
			},
			{
				id: '4444',
				innerContent: [
					{
						id: 'dddd',
						type: 'Heading',
						data: {
							text: 'Grape',
							level: 1,
						},
					},
				],
			},
		],
	};
	it( 'should handle default state', function () {
		expect(
			( 0, _layoutSlice.default )( undefined, {
				type: 'unknown',
			} )
		).toEqual( {
			content: [],
		} );
	} );
	it( 'should handle moving items up', function () {
		var actual = ( 0, _layoutSlice.default )(
			initialState,
			( 0, _layoutSlice.moveItem )( {
				currentIndex: 1,
				newIndex: 3,
			} )
		);
		expect( actual.content[ 0 ].id ).toEqual( '1111' );
		expect( actual.content[ 1 ].id ).toEqual( '3333' );
		expect( actual.content[ 2 ].id ).toEqual( '4444' );
		expect( actual.content[ 3 ].id ).toEqual( '2222' );
	} );
	it( 'should handle moving items down', function () {
		var actual = ( 0, _layoutSlice.default )(
			initialState,
			( 0, _layoutSlice.moveItem )( {
				currentIndex: 3,
				newIndex: 1,
			} )
		);
		expect( actual.content[ 0 ].id ).toEqual( '1111' );
		expect( actual.content[ 1 ].id ).toEqual( '4444' );
		expect( actual.content[ 2 ].id ).toEqual( '2222' );
		expect( actual.content[ 3 ].id ).toEqual( '3333' );
	} );
	it( 'should handle adding an item', function () {
		var newItem = {
				id: '5555',
				innerContent: [
					{
						id: 'eeee',
						type: 'Heading',
						data: {
							text: 'Apple',
							level: 1,
						},
					},
				],
			},
			actual = ( 0, _layoutSlice.default )(
				initialState,
				( 0, _layoutSlice.addContentItem )( newItem )
			);
		expect( actual.content.length ).toEqual( 5 );
		expect( actual.content[ 4 ] ).toEqual( newItem );
	} );
	it( 'should handle removing an item', function () {
		var actual = ( 0, _layoutSlice.default )(
			initialState,
			( 0, _layoutSlice.removeContentItem )( 2 )
		);
		expect( actual.content.length ).toEqual( 3 );
		expect( actual.content[ 2 ].id ).toEqual( '4444' );
	} );
	it( 'should handle setting the entire content tree', function () {
		var newContentTree = [
				{
					id: '5555',
					innerContent: [
						{
							id: 'eeee',
							type: 'Heading',
							data: {
								text: 'Carrot',
								level: 1,
							},
						},
					],
				},
				{
					id: '6666',
					innerContent: [
						{
							id: 'ffff',
							type: 'Heading',
							data: {
								text: 'Kale',
								level: 1,
							},
						},
					],
				},
				{
					id: '7777',
					innerContent: [
						{
							id: 'gggg',
							type: 'Heading',
							data: {
								text: 'Beet',
								level: 1,
							},
						},
					],
				},
				{
					id: '8888',
					innerContent: [
						{
							id: 'hhhh',
							type: 'Heading',
							data: {
								text: 'Green Bean',
								level: 1,
							},
						},
					],
				},
			],
			actual = ( 0, _layoutSlice.default )(
				initialState,
				( 0, _layoutSlice.setContent )( newContentTree )
			);
		expect( actual.content ).toEqual( newContentTree );
	} );
	it( 'should handle setting the data of an individual item', function () {
		var newData = {
				text: 'Peach',
				level: 2,
			},
			actual = ( 0, _layoutSlice.default )(
				initialState,
				( 0, _layoutSlice.setContentItemData )( {
					rowIndex: 2,
					columnIndex: 0,
					data: newData,
				} )
			);
		expect( actual.content[ 2 ].innerContent[ 0 ].data ).toEqual( newData );
	} );
} );
