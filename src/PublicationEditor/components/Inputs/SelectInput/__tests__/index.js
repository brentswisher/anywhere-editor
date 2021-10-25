import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import SelectInput from '../';
expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = render(
			<SelectInput
				name="alignment"
				label="Alignment:"
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
			/>
		),
		label = container.querySelector( 'label' ),
		select = container.querySelector( 'select' );

	expect( label ).toHaveAttribute( 'for', 'alignment' );
	expect( label ).toContainHTML( 'Alignment:' );

	expect( select ).toHaveAttribute( 'id', 'alignment' );
} );

it( 'should set initial value correctly', () => {
	const { container } = render(
			<SelectInput
				name="alignment"
				label="Alignment:"
				value="center"
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
			/>
		),
		select = container.querySelector( 'select' );
	expect( select ).toHaveValue( 'center' );
} );

it( 'should render help text when provided', () => {
	const { container } = render(
			<SelectInput
				fieldName="alignment"
				fieldLabel="Alignment:"
				helpText="This is what side on which the text will appear."
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
			/>
		),
		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent(
		'This is what side on which the text will appear'
	);
} );

it( 'should visually hide label when labelHidden is set', () => {
	const { container } = render(
			<SelectInput
				name="firstName"
				label="First Name:"
				labelHidden={ true }
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
			/>
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'sr-only' );
} );

it( 'should not have basic accessibility issues', async () => {
	const { container } = render(
			<SelectInput
				name="firstName"
				label="First Name:"
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
			/>
		),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );
