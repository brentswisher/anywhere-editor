import React from 'react';
import { render } from '@testing-library/react';

import TextInput from '../';
it( 'should render sucessfully', () => {
	let { container } = render (
		<TextInput name="firstName" label="First Name:" />
	)
	const label = container.querySelector( 'label' );
	expect( label ).toHaveAttribute( 'for', 'firstName' );
	expect( label ).toContainHTML( 'First Name:' );

	const input = container.querySelector( 'input' );
	expect( input ).toHaveAttribute( 'id', 'firstName' );
} );

it( 'should set initial value correctly', () => {
	let { container } = render (
		<TextInput name="firstName" label="First Name:" value="Bob"/>
	)
	
	const input = container.querySelector( 'input' );
	expect( input ).toHaveAttribute( 'value', 'Bob' );
} );

it( 'should render help text when provided', () => {
	let { container } = render (
		<TextInput name="firstName" label="First Name:" helpText="This is what your friends call you"/>
	)
	
	const helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent( 'This is what your friends call you' );
} );

it( 'should visually hide label when labelHidden is set', () => {
	let { container } = render (
		<TextInput name="firstName" label="First Name:" labelHidden={ true } />
	)
	
	const label = container.querySelector( 'label' );
	expect( label ).toHaveClass('sr-only');
} );

		