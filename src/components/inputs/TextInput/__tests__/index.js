import React from 'react';
import { render } from '@testing-library/react';

import TextInput from '../';
it( 'should render sucessfully', () => {
	const { container } = render (
		<TextInput name="firstName" label="First Name:" />
	),
		label = container.querySelector( 'label' ),
		input = container.querySelector( 'input' );

	expect( label ).toHaveAttribute( 'for', 'firstName' );
	expect( label ).toContainHTML( 'First Name:' );

	expect( input ).toHaveAttribute( 'id', 'firstName' );
} );

it( 'should set initial value correctly', () => {
	const { container } = render (
		<TextInput name="firstName" label="First Name:" value="Bob" />
	),
		input = container.querySelector( 'input' );
	expect( input ).toHaveAttribute( 'value', 'Bob' );
} );

it( 'should render help text when provided', () => {
	const { container } = render (
		<TextInput name="firstName" label="First Name:" helpText="This is what your friends call you" />
	),

		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent( 'This is what your friends call you' );
} );

it( 'should visually hide label when labelHidden is set', () => {
	const { container } = render (
		<TextInput name="firstName" label="First Name:" labelHidden={ true } />
	),

		label = container.querySelector( 'label' );
	expect( label ).toHaveClass('sr-only');
} );

