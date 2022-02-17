import React from 'react';
import { renderWithProvider } from '../../../../test-utils.js';
import { axe, toHaveNoViolations } from 'jest-axe';

import RichTextInput from '..';

expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = renderWithProvider(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
			/>
		),
		editor = container.querySelector( 'div.mce-content-body' );

	expect( editor ).toContainHTML( 'This is an editor instance' );
} );

it( 'should set initial value correctly', () => {
	const { container } = renderWithProvider(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
			/>
		),
		editor = container.querySelector( '.mce-content-body' );
	expect( editor ).toHaveTextContent( 'This is an editor instance.' );
} );

it( 'should render help text when provided', () => {
	const { container } = renderWithProvider(
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
	const { container } = renderWithProvider(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
				labelHidden={ true }
			/>
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'show-for-sr' );
} );
//TODO: the react-quill editor does not pass a11y tests, may need to replace with another library
it( 'should not have basic accessibility issues', async () => {
	const { container } = renderWithProvider(
			<RichTextInput
				name="pageContent"
				value="This is an editor instance."
				label="Content:"
				onChange={ ( e ) => null }
			/>
		),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );

it( 'should render the toolbar passed in', async () => {
	const { container } = renderWithProvider(
		<RichTextInput
			name="pageContent"
			value="This is an editor instance."
			label="Content:"
			onChange={ ( e ) => null }
			toolbar="bold"
		/>
	);
	await new Promise( ( r ) => setTimeout( r, 1000 ) );
	expect(
		container.querySelector( 'button[title="Bold"]' )
	).toBeInTheDocument();
	expect(
		container.querySelector( 'button[title="Italic"]' )
	).not.toBeInTheDocument();
} );
