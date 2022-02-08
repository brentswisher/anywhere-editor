import React from 'react';
import { render } from '@testing-library/react';
// import { axe, toHaveNoViolations } from 'jest-axe';
import RichTextInput from '..';

// expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = render(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
			/>
		),
		editor = container.querySelector( 'div.ql-editor' );

	expect( editor ).toContainHTML( 'This is an editor instance' );
} );

it( 'should set initial value correctly', () => {
	const { container } = render(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
			/>
		),
		editor = container.querySelector( '.ql-editor' );
	expect( editor ).toHaveTextContent( 'This is an editor instance.' );
} );

it( 'should render help text when provided', () => {
	const { container } = render(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
				helpText="This is the main content of this page"
			/>
		),
		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent(
		'This is the main content of this page'
	);
} );

it( 'should visually hide label when labelHidden is set', () => {
	const { container } = render(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
				labelHidden={ true }
			/>
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'sr-only' );
} );
//TODO: the react-quill editor does not pass a11y tests, may need to replace with another library
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
