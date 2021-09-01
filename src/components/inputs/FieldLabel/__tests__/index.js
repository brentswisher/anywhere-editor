import React from 'react';
import { render } from '@testing-library/react';

import FieldLabel from '../';
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
