import React from 'react';
import { renderWithProvider, fireEvent } from '../../../test-utils.js';
import { axe, toHaveNoViolations } from 'jest-axe';
import EditModal from '../';

expect.extend( toHaveNoViolations );

// Set up the app element for the Modal component
const modalRoot = document.createElement( 'div' );
modalRoot.setAttribute( 'id', 'anywhere-editor' );
document.body.appendChild( modalRoot );

it( 'should render sucessfully', () => {
	const { getByText } = renderWithProvider(
		<EditModal>
			<p>Testing</p>
		</EditModal>
	);
	//Because of how modals reder we can't use querySelector on the container
	expect( getByText( 'Testing' ) ).toBeTruthy();
	expect( getByText( 'Update', { selector: 'button' } ) ).toBeTruthy();
	expect( getByText( 'Cancel', { selector: 'button' } ) ).toBeTruthy();
} );

it( 'calls "saveChanges" prop on button click', () => {
	const saveChange = jest.fn(),
		{ getByText } = renderWithProvider(
			<EditModal saveChanges={ saveChange }>
				<p>Testing</p>
			</EditModal>
		);
	fireEvent.click( getByText( 'Update', { selector: 'button' } ) );
	expect( saveChange ).toHaveBeenCalled();
} );

it( 'calls "cancelChanges" prop on button click', () => {
	const cancelMock = jest.fn(),
		{ getByText } = renderWithProvider(
			<EditModal cancelChanges={ cancelMock }>
				<p>Testing</p>
			</EditModal>
		);
	fireEvent.click( getByText( 'Cancel', { selector: 'button' } ) );
	expect( cancelMock ).toHaveBeenCalled();
} );

it( 'renders errors when they are present', () => {
	const { getByText } = renderWithProvider(
		<EditModal error="This is an error">
			<p>Testing</p>
		</EditModal>
	);
	expect( getByText( 'This is an error' ) ).toBeTruthy();
} );

it( 'should not have basic accessibility issues', async () => {
	const { container } = renderWithProvider(
			<EditModal>
				<p>Testing</p>
			</EditModal>
		),
		results = await axe( container );
	expect( results ).toHaveNoViolations();
} );
