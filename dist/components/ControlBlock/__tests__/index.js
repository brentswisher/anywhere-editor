'use strict';

var _react = _interopRequireDefault( require( 'react' ) );

var _react2 = require( '@testing-library/react' );

var _reactBeautifulDnd = require( 'react-beautiful-dnd' );

var _jestAxe = require( 'jest-axe' );

var _ = _interopRequireDefault( require( '../' ) );

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function asyncGeneratorStep( gen, resolve, reject, _next, _throw, key, arg ) {
	try {
		var info = gen[ key ]( arg );
		var value = info.value;
	} catch ( error ) {
		reject( error );
		return;
	}
	if ( info.done ) {
		resolve( value );
	} else {
		Promise.resolve( value ).then( _next, _throw );
	}
}

function _asyncToGenerator( fn ) {
	return function () {
		var self = this,
			args = arguments;
		return new Promise( function ( resolve, reject ) {
			var gen = fn.apply( self, args );
			function _next( value ) {
				asyncGeneratorStep(
					gen,
					resolve,
					reject,
					_next,
					_throw,
					'next',
					value
				);
			}
			function _throw( err ) {
				asyncGeneratorStep(
					gen,
					resolve,
					reject,
					_next,
					_throw,
					'throw',
					err
				);
			}
			_next( undefined );
		} );
	};
}

expect.extend( _jestAxe.toHaveNoViolations ); //Since it's a draggable componenet, it needs this to render at all

var withDNDWrapper = function withDNDWrapper( el ) {
	return /*#__PURE__*/ _react.default.createElement(
		_reactBeautifulDnd.DragDropContext,
		null,
		/*#__PURE__*/ _react.default.createElement(
			_reactBeautifulDnd.Droppable,
			{
				droppableId: 'dropper',
			},
			function ( provided ) {
				return /*#__PURE__*/ _react.default.createElement(
					'div',
					{
						className: 'block-list',
						ref: provided.innerRef,
					},
					el
				);
			}
		)
	);
};

it( 'should render sucessfully', function () {
	var _render = ( 0, _react2.render )(
			withDNDWrapper(
				/*#__PURE__*/ _react.default.createElement(
					_.default,
					{
						key: 'test',
						id: 'test',
						index: 0,
					},
					/*#__PURE__*/ _react.default.createElement(
						'p',
						null,
						'Testing'
					)
				)
			)
		),
		container = _render.container,
		block = container.querySelector( 'div.block' ),
		btnDrag = container.querySelector( '.block-button-drag' ),
		btnUp = container.querySelector( '.block-button-up' ),
		btnDown = container.querySelector( '.block-button-down' ),
		btnDelete = container.querySelector( '.block-button-delete' );

	expect( block ).toContainHTML( '<p>Testing</p>' );
	expect( btnDrag ).not.toBeNull();
	expect( btnUp ).not.toBeNull();
	expect( btnDown ).not.toBeNull();
	expect( btnDelete ).not.toBeNull();
} );
it( 'calls "onMoveUp" prop on button up click', function () {
	// Render new instance in every test to prevent leaking state
	var onMoveUp = jest.fn(),
		_render2 = ( 0, _react2.render )(
			withDNDWrapper(
				/*#__PURE__*/ _react.default.createElement(
					_.default,
					{
						key: 'test',
						id: 'test',
						index: 0,
						onMoveUp: onMoveUp,
					},
					/*#__PURE__*/ _react.default.createElement(
						'p',
						null,
						'Testing'
					)
				)
			)
		),
		container = _render2.container,
		btnUp = container.querySelector( '.block-button-up' );

	_react2.fireEvent.click( btnUp );

	expect( onMoveUp ).toHaveBeenCalled();
} );
it( 'calls "onMoveDown" prop on button up click', function () {
	// Render new instance in every test to prevent leaking state
	var onMoveDown = jest.fn(),
		_render3 = ( 0, _react2.render )(
			withDNDWrapper(
				/*#__PURE__*/ _react.default.createElement(
					_.default,
					{
						key: 'test',
						id: 'test',
						index: 0,
						onMoveDown: onMoveDown,
					},
					/*#__PURE__*/ _react.default.createElement(
						'p',
						null,
						'Testing'
					)
				)
			)
		),
		container = _render3.container,
		btnUp = container.querySelector( '.block-button-down' );

	_react2.fireEvent.click( btnUp );

	expect( onMoveDown ).toHaveBeenCalled();
} );
it( 'calls "onDelete" prop on button up click', function () {
	// Render new instance in every test to prevent leaking state
	var onDelete = jest.fn(),
		_render4 = ( 0, _react2.render )(
			withDNDWrapper(
				/*#__PURE__*/ _react.default.createElement(
					_.default,
					{
						key: 'test',
						id: 'test',
						index: 0,
						onDelete: onDelete,
					},
					/*#__PURE__*/ _react.default.createElement(
						'p',
						null,
						'Testing'
					)
				)
			)
		),
		container = _render4.container,
		btnUp = container.querySelector( '.block-button-delete' );

	_react2.fireEvent.click( btnUp );

	expect( onDelete ).toHaveBeenCalled();
} );
it( 'should handle disabled buttons correctly', function () {
	var testFunction = jest.fn(),
		_render5 = ( 0, _react2.render )(
			withDNDWrapper(
				/*#__PURE__*/ _react.default.createElement(
					_.default,
					{
						key: 'test',
						id: 'test',
						index: 0,
						disableUp: true,
						disableDown: true,
						disableDelete: true,
						onMoveUp: testFunction,
						onMoveDown: testFunction,
						onDelete: testFunction,
					},
					/*#__PURE__*/ _react.default.createElement(
						'p',
						null,
						'Testing'
					)
				)
			)
		),
		container = _render5.container,
		btnUp = container.querySelector( '.block-button-up' ),
		btnDown = container.querySelector( '.block-button-down' ),
		btnDelete = container.querySelector( '.block-button-delete' );

	expect( btnUp ).toBeDisabled();
	expect( btnDown ).toBeDisabled();
	expect( btnDelete ).toBeDisabled();

	_react2.fireEvent.click( btnUp );

	_react2.fireEvent.click( btnDown );

	_react2.fireEvent.click( btnDelete );

	expect( testFunction ).not.toHaveBeenCalled();
} );
it(
	'should not have basic accessibility issues',
	/*#__PURE__*/ _asyncToGenerator(
		/*#__PURE__*/ regeneratorRuntime.mark( function _callee() {
			var _render6, container, results;

			return regeneratorRuntime.wrap( function _callee$( _context ) {
				while ( 1 ) {
					switch ( ( _context.prev = _context.next ) ) {
						case 0:
							_render6 = ( 0, _react2.render )(
								withDNDWrapper(
									/*#__PURE__*/ _react.default.createElement(
										_.default,
										{
											key: 'test',
											id: 'test',
											index: 0,
										},
										/*#__PURE__*/ _react.default.createElement(
											'p',
											null,
											'Testing'
										)
									)
								)
							);
							container = _render6.container;
							_context.next = 4;
							return ( 0, _jestAxe.axe )( container );

						case 4:
							results = _context.sent;
							expect( results ).toHaveNoViolations();

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee );
		} )
	)
);
