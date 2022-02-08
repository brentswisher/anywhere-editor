import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import FieldLabel from '../';

expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = render(
			<FieldLabel htmlFor="firstName">First Name:</FieldLabel>
		),
		label = container.querySelector( 'label' );

	expect( label ).toHaveAttribute( 'for', 'firstName' );
	expect( label ).toContainHTML( 'First Name:' );
} );

it( 'should visually hide when visuallyHidden is set', () => {
	const { container } = render(
			<FieldLabel htmlFor="firstName" visuallyHidden={ true }>
				First Name
			</FieldLabel>
		),
		label = container.querySelector( 'label' );
	expect( label ).toHaveClass( 'sr-only' );
} );

it( 'should not have basic accessibility issues', async () => {
	const { container } = render(
			<FieldLabel htmlFor="firstName" visuallyHidden={ true }>
				First Name
			</FieldLabel>
		),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );
