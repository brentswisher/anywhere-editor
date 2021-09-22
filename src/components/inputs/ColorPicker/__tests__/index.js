import React from 'react';
import { render } from '@testing-library/react';

import ColorPicker from '..';
it( 'should render sucessfully', () => {
	const { container } = render(
			<ColorPicker name="backgroundColor" label="Background Color:" />
		),
		label = container.querySelector( 'label' ),
		select = container.querySelector( 'select' );

	expect( label ).toHaveAttribute( 'for', 'backgroundColor' );
	expect( label ).toContainHTML( 'Background Color:' );

	expect( select ).toHaveAttribute( 'id', 'backgroundColor' );
} );

it( 'should set initial value correctly', () => {
	const { container } = render(
			<ColorPicker
				name="backgroundColor"
				label="Background Color:"
				colors={ {
					black: '#0a0a0a',
					teal: '#006666',
					brown: '#6F4923',
				} }
				value="teal"
			/>
		),
		select = container.querySelector( 'select' ),
		sample = container.querySelector( 'div.color-picker-sample' );
	expect( select ).toHaveValue( 'teal' );
	expect( sample ).toHaveStyle( `background-color: #006666` );
} );

it( 'should render help text when provided', () => {
	const { container } = render(
			<ColorPicker
				name="backgroundColor"
				label="Background Color:"
				helpText="This is what color will be behind the text."
			/>
		),
		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent(
		'This is what color will be behind the text'
	);
} );

it( 'should visually hide label when labelHidden is set', () => {
	const { container } = render(
			<ColorPicker
				name="firstName"
				label="First Name:"
				labelHidden={ true }
			/>
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'sr-only' );
} );
