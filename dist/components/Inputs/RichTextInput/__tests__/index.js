'use strict';

var _react = _interopRequireDefault( require( 'react' ) );

var _react2 = require( '@testing-library/react' );

var _ = _interopRequireDefault( require( '..' ) );

function _interopRequireDefault( obj ) {
	return obj && obj.__esModule ? obj : { default: obj };
}

// import { axe, toHaveNoViolations } from 'jest-axe';
// expect.extend( toHaveNoViolations );
it( 'should render sucessfully', function () {
	var _render = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'pageContent',
				value: 'This is an editor instance.',
				label: 'Content:',
				onChange: function onChange( e ) {
					return null;
				},
			} )
		),
		container = _render.container,
		editor = container.querySelector( 'div.ql-editor' );

	expect( editor ).toContainHTML( 'This is an editor instance' );
} );
it( 'should set initial value correctly', function () {
	var _render2 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'pageContent',
				value: 'This is an editor instance.',
				label: 'Content:',
				onChange: function onChange( e ) {
					return null;
				},
			} )
		),
		container = _render2.container,
		editor = container.querySelector( '.ql-editor' );

	expect( editor ).toHaveTextContent( 'This is an editor instance.' );
} );
it( 'should render help text when provided', function () {
	var _render3 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'pageContent',
				value: 'This is an editor instance.',
				label: 'Content:',
				onChange: function onChange( e ) {
					return null;
				},
				helpText: 'This is the main content of this page',
			} )
		),
		container = _render3.container,
		helpContainer = container.querySelector( 'span.help-text' );

	expect( helpContainer ).toHaveTextContent(
		'This is the main content of this page'
	);
} );
it( 'should visually hide label when labelHidden is set', function () {
	var _render4 = ( 0, _react2.render )(
			/*#__PURE__*/ _react.default.createElement( _.default, {
				name: 'pageContent',
				value: 'This is an editor instance.',
				label: 'Content:',
				onChange: function onChange( e ) {
					return null;
				},
				labelHidden: true,
			} )
		),
		container = _render4.container,
		label = container.querySelector( 'label' );

	expect( label ).toHaveClass( 'show-for-sr' );
} ); //TODO: the react-quill editor does not pass a11y tests, may need to replace with another library
// it( 'should not have basic accessibility issues', async () => {
// 	const { container } = render(
// 			<RichTextInput
// 				name="pageContent"
// 				value="This is an editor instance."
// 				label="Content:"
// 				onChange={ ( e ) => null }
// 			/>
// 		),
// 		results = await axe( container );
// 	expect( results ).toHaveNoViolations();
// } );
//TODO: This would be a nivce feature to add, but don't need right now since the quill editor may be replaced anyway
// it( 'should render the toolbar passed in', () => {
// 	const { container } = render(
// 			<RichTextInput
// 				name="pageContent"
// 				value="This is an editor instance."
// 				label="Content:"
// 				onChange={ ( e ) => null }
// 				toolbar={ [ [ 'underline' ] ] }
// 			/>
// 		),
// 		toolbar = container.querySelector( 'div.ql-toolbar' );
// 	expect( toolbar ).toContainElement(
// 		container.querySelector( 'button.ql-underline' )
// 	);
// 	expect( toolbar ).not.toContainElement(
// 		container.querySelector( 'button.ql-italic' )
// 	);
// } );
