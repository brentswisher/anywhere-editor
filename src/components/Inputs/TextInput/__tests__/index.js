import React from 'react';
import { renderWithProvider } from '../../../../test-utils.js';
import { axe, toHaveNoViolations } from 'jest-axe';
import TextInput from '../';

expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = renderWithProvider(
			<TextInput name="firstName" label="First Name:" />
		),
		label = container.querySelector( 'label' ),
		input = container.querySelector( 'input' );

	expect( label ).toHaveAttribute( 'for', 'firstName' );
	expect( label ).toContainHTML( 'First Name:' );

	expect( input ).toHaveAttribute( 'id', 'firstName' );
} );

it( 'should set initial value correctly', () => {
	const { container } = renderWithProvider(
			<TextInput name="firstName" label="First Name:" value="Bob" />
		),
		input = container.querySelector( 'input' );
	expect( input ).toHaveAttribute( 'value', 'Bob' );
} );

it( 'should render help text when provided', () => {
	const { container } = renderWithProvider(
			<TextInput
				name="firstName"
				label="First Name:"
				helpText="This is what your friends call you"
			/>
		),
		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent(
		'This is what your friends call you'
	);
} );

it( 'should visually hide label when labelHidden is set', () => {
	const { container } = renderWithProvider(
			<TextInput
				name="firstName"
				label="First Name:"
				labelHidden={ true }
			/>
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'show-for-sr' );
} );

it( 'should not have basic accessibility issues', async () => {
	const { container } = renderWithProvider(
			<TextInput name="firstName" label="First Name:" />
		),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );
