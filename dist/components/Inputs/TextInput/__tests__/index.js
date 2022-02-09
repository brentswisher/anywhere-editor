'use strict';

var _react = _interopRequireDefault( require( 'react' ) );

var _react2 = require( '@testing-library/react' );

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

expect.extend( _jestAxe.toHaveNoViolations );
it( 'should render sucessfully', function () {
	var _render = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'firstName',
				label: 'First Name:',
			} )
		),
		container = _render.container,
		label = container.querySelector( 'label' ),
		input = container.querySelector( 'input' );

	expect( label ).toHaveAttribute( 'for', 'firstName' );
	expect( label ).toContainHTML( 'First Name:' );
	expect( input ).toHaveAttribute( 'id', 'firstName' );
} );
it( 'should set initial value correctly', function () {
	var _render2 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'firstName',
				label: 'First Name:',
				value: 'Bob',
			} )
		),
		container = _render2.container,
		input = container.querySelector( 'input' );

	expect( input ).toHaveAttribute( 'value', 'Bob' );
} );
it( 'should render help text when provided', function () {
	var _render3 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'firstName',
				label: 'First Name:',
				helpText: 'This is what your friends call you',
			} )
		),
		container = _render3.container,
		helpContainer = container.querySelector( 'span.help-text' );

	expect( helpContainer ).toHaveTextContent(
		'This is what your friends call you'
	);
} );
it( 'should visually hide label when labelHidden is set', function () {
	var _render4 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'firstName',
				label: 'First Name:',
				labelHidden: true,
			} )
		),
		container = _render4.container,
		label = container.querySelector( 'label' );

	expect( label ).toHaveClass( 'show-for-sr' );
} );
it(
	'should not have basic accessibility issues',
	/*#__PURE__*/ _asyncToGenerator(
		/*#__PURE__*/ regeneratorRuntime.mark( function _callee() {
			var _render5, container, results;

			return regeneratorRuntime.wrap( function _callee$( _context ) {
				while ( 1 ) {
					switch ( ( _context.prev = _context.next ) ) {
						case 0:
							_render5 = ( 0, _react2.render )(
								/*#__PURE__*/ _react.default.createElement(
									_.default,
									{
										name: 'firstName',
										label: 'First Name:',
									}
								)
							);
							container = _render5.container;
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
