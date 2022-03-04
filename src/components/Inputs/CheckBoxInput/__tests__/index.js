import React from 'react';
import { renderWithProvider } from '../../../../test-utils.js';
import { axe, toHaveNoViolations } from 'jest-axe';
import CheckBoxInput from '..';

expect.extend( toHaveNoViolations );

it( 'should render sucessfully', () => {
	const { container } = renderWithProvider(
			<CheckBoxInput name="isActive" label="This is active" />
		),
		label = container.querySelector( 'label' ),
		input = container.querySelector( 'input' );

	expect( label ).toHaveAttribute( 'for', 'isActive' );
	expect( label ).toContainHTML( 'This is active' );

	expect( input ).toHaveAttribute( 'id', 'isActive' );
} );

it( 'should set initial check status correctly', () => {
	const { container } = renderWithProvider(
			<CheckBoxInput
				name="isActive"
				label="This is active"
				checked={ true }
			/>
		),
		input = container.querySelector( 'input' );
	expect( input ).toBeChecked();
} );

it( 'should render help text when provided', () => {
	const { container } = renderWithProvider(
			<CheckBoxInput
				name="isActive"
				label="This is active"
				helpText="Only active items will be displayed"
			/>
		),
		helpContainer = container.querySelector( 'span.help-text' );
	expect( helpContainer ).toHaveTextContent(
		'Only active items will be displayed'
	);
} );

it( 'should not have basic accessibility issues', async () => {
	const { container } = renderWithProvider(
			<CheckBoxInput name="isActive" label="This is active" />
		),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );
