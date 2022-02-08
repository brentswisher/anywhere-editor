import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ImageInput from '../';

expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = render( <ImageInput name="image" label="Image:" /> ),
		label = container.querySelector( 'label' ),
		input = container.querySelector( 'input' );

	expect( label ).toHaveAttribute( 'for', 'image' );
	expect( label ).toContainHTML( 'Image:' );

	expect( input ).toHaveAttribute( 'id', 'image' );
} );

it( 'should display a thumbnail when image is passed in as a file path', () => {
	const { container } = render(
			<ImageInput
				name="image"
				label="Image:"
				value="Bob"
				src="./sample.jpg"
			/>
		),
		thumbnail = container.querySelector( 'img' );
	expect( thumbnail ).toHaveAttribute( 'src', './sample.jpg' );
} );

it( 'should display a thumbnail when image is passed in as an structure', () => {
	const mockedBase64 = 'data:image/jpeg;base64,TEST',
		{ container } = render(
			<ImageInput
				name="image"
				label="Image:"
				value="Bob"
				sizes={ [ 500 ] }
				src={ {
					500: mockedBase64,
				} }
			/>
		),
		thumbnail = container.querySelector( 'img' );
	expect( thumbnail ).toHaveAttribute( 'src', mockedBase64 );
} );

it( 'should render help text when provided', () => {
	const { container } = render(
			<ImageInput
				name="image"
				label="Image"
				helpText="This is the main header image"
			/>
		),
		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent(
		'This is the main header image'
	);
} );

it( 'should visually hide label when labelHidden is set', () => {
	const { container } = render(
			<ImageInput name="image" label="Image:" labelHidden={ true } />
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'sr-only' );
} );

it( 'should not have basic accessibility issues', async () => {
	const { container } = render( <ImageInput name="image" label="Image:" /> ),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );
