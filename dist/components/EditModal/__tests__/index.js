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

expect.extend( _jestAxe.toHaveNoViolations ); // Set up the app element for the Modal component

var modalRoot = document.createElement( 'div' );
modalRoot.setAttribute( 'id', 'publicationEditorLayout' );
document.body.appendChild( modalRoot );
it( 'should render sucessfully', function () {
	var _render = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement(
				_.default,
				null,
				/*#__PURE__*/ _react.default.createElement(
					'p',
					null,
					'Testing'
				)
			)
		),
		getByText = _render.getByText; //Because of how modals reder we can't use querySelector on the container

	expect( getByText( 'Testing' ) ).toBeTruthy();
	expect(
		getByText( 'Update', {
			selector: 'button',
		} )
	).toBeTruthy();
	expect(
		getByText( 'Cancel', {
			selector: 'button',
		} )
	).toBeTruthy();
} );
it( 'calls "saveChanges" prop on button click', function () {
	var saveChange = jest.fn(),
		_render2 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement(
				_.default,
				{
					saveChanges: saveChange,
				},
				/*#__PURE__*/ _react.default.createElement(
					'p',
					null,
					'Testing'
				)
			)
		),
		getByText = _render2.getByText;

	_react2.fireEvent.click(
		getByText( 'Update', {
			selector: 'button',
		} )
	);

	expect( saveChange ).toHaveBeenCalled();
} );
it( 'calls "cancelChanges" prop on button click', function () {
	var cancelMock = jest.fn(),
		_render3 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement(
				_.default,
				{
					cancelChanges: cancelMock,
				},
				/*#__PURE__*/ _react.default.createElement(
					'p',
					null,
					'Testing'
				)
			)
		),
		getByText = _render3.getByText;

	_react2.fireEvent.click(
		getByText( 'Cancel', {
			selector: 'button',
		} )
	);

	expect( cancelMock ).toHaveBeenCalled();
} );
it( 'renders errors when they are present', function () {
	var _render4 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement(
				_.default,
				{
					error: 'This is an error',
				},
				/*#__PURE__*/ _react.default.createElement(
					'p',
					null,
					'Testing'
				)
			)
		),
		getByText = _render4.getByText;

	expect( getByText( 'This is an error' ) ).toBeTruthy();
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
									null,
									/*#__PURE__*/ _react.default.createElement(
										'p',
										null,
										'Testing'
									)
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
