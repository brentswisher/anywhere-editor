import layoutReducer, {
	moveItem,
	addContentItem,
	removeContentItem,
	setContentItemData,
	setContent,
} from '../layoutSlice';

describe( 'Layout Reducer', () => {
	const initialState = {
		content: [
			{
				id: '1111',
				innerContent: [
					{
						id: 'aaaa',
						type: 'Heading',
						data: { text: 'Apple', level: 1 },
					},
				],
			},
			{
				id: '2222',
				innerContent: [
					{
						id: 'bbbb',
						type: 'Heading',
						data: { text: 'Kiwi', level: 1 },
					},
				],
			},
			{
				id: '3333',
				innerContent: [
					{
						id: 'cccc',
						type: 'Heading',
						data: { text: 'Banana', level: 1 },
					},
				],
			},
			{
				id: '4444',
				innerContent: [
					{
						id: 'dddd',
						type: 'Heading',
						data: { text: 'Grape', level: 1 },
					},
				],
			},
		],
	};
	it( 'should handle default state', () => {
		expect( layoutReducer( undefined, { type: 'unknown' } ) ).toEqual( {
			content: [],
		} );
	} );

	it( 'should handle moving items up', () => {
		const actual = layoutReducer(
			initialState,
			moveItem( { currentIndex: 1, newIndex: 3 } )
		);
		expect( actual.content[ 0 ].id ).toEqual( '1111' );
		expect( actual.content[ 1 ].id ).toEqual( '3333' );
		expect( actual.content[ 2 ].id ).toEqual( '4444' );
		expect( actual.content[ 3 ].id ).toEqual( '2222' );
	} );

	it( 'should handle moving items down', () => {
		const actual = layoutReducer(
			initialState,
			moveItem( { currentIndex: 3, newIndex: 1 } )
		);
		expect( actual.content[ 0 ].id ).toEqual( '1111' );
		expect( actual.content[ 1 ].id ).toEqual( '4444' );
		expect( actual.content[ 2 ].id ).toEqual( '2222' );
		expect( actual.content[ 3 ].id ).toEqual( '3333' );
	} );

	it( 'should handle adding an item', () => {
		const newItem = {
				id: '5555',
				innerContent: [
					{
						id: 'eeee',
						type: 'Heading',
						data: { text: 'Apple', level: 1 },
					},
				],
			},
			actual = layoutReducer( initialState, addContentItem( newItem ) );
		expect( actual.content.length ).toEqual( 5 );
		expect( actual.content[ 4 ] ).toEqual( newItem );
	} );

	it( 'should handle removing an item', () => {
		const actual = layoutReducer( initialState, removeContentItem( 2 ) );
		expect( actual.content.length ).toEqual( 3 );
		expect( actual.content[ 2 ].id ).toEqual( '4444' );
	} );

	it( 'should handle setting the entire content tree', () => {
		const newContentTree = [
				{
					id: '5555',
					innerContent: [
						{
							id: 'eeee',
							type: 'Heading',
							data: { text: 'Carrot', level: 1 },
						},
					],
				},
				{
					id: '6666',
					innerContent: [
						{
							id: 'ffff',
							type: 'Heading',
							data: { text: 'Kale', level: 1 },
						},
					],
				},
				{
					id: '7777',
					innerContent: [
						{
							id: 'gggg',
							type: 'Heading',
							data: { text: 'Beet', level: 1 },
						},
					],
				},
				{
					id: '8888',
					innerContent: [
						{
							id: 'hhhh',
							type: 'Heading',
							data: { text: 'Green Bean', level: 1 },
						},
					],
				},
			],
			actual = layoutReducer(
				initialState,
				setContent( newContentTree )
			);

		expect( actual.content ).toEqual( newContentTree );
	} );

	it( 'should handle setting the data of an individual item', () => {
		const newData = {
				text: 'Peach',
				level: 2,
			},
			actual = layoutReducer(
				initialState,
				setContentItemData( {
					rowIndex: 2,
					columnIndex: 0,
					data: newData,
				} )
			);
		expect( actual.content[ 2 ].innerContent[ 0 ].data ).toEqual( newData );
	} );
} );
