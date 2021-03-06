import React from 'react';
import { renderWithProvider, fireEvent } from '../../../test-utils.js';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import { axe, toHaveNoViolations } from 'jest-axe';
import ControlBlock from '../';

// expect.extend( toHaveNoViolations );

//Since it's a draggable componenet, it needs this to render at all
const withDNDWrapper = ( el ) => (
	<DragDropContext>
		<Droppable droppableId={ 'dropper' }>
			{ ( provided ) => (
				<div className="block-list" ref={ provided.innerRef }>
					{ el }
				</div>
			) }
		</Droppable>
	</DragDropContext>
);

it( 'should render sucessfully', () => {
	const { container } = renderWithProvider(
			withDNDWrapper(
				<ControlBlock key={ 'test' } id={ 'test' } index={ 0 }>
					<p>Testing</p>
				</ControlBlock>
			)
		),
		block = container.querySelector( '.block' ),
		btnDrag = container.querySelector( '.block-button-drag' ),
		btnUp = container.querySelector( '.block-button-up' ),
		btnDown = container.querySelector( '.block-button-down' ),
		btnDelete = container.querySelector( '.block-button-delete' );

	expect( block ).toContainHTML( '<p>Testing</p>' );
	expect( btnDrag ).not.toBeNull();
	expect( btnUp ).not.toBeNull();
	expect( btnDown ).not.toBeNull();
	expect( btnDelete ).not.toBeNull();
} );

it( 'calls "onMoveUp" prop on button up click', () => {
	// Render new instance in every test to prevent leaking state
	const onMoveUp = jest.fn(),
		{ container } = renderWithProvider(
			withDNDWrapper(
				<ControlBlock
					key={ 'test' }
					id={ 'test' }
					index={ 0 }
					onMoveUp={ onMoveUp }
				>
					<p>Testing</p>
				</ControlBlock>
			)
		),
		btnUp = container.querySelector( '.block-button-up' );
	fireEvent.click( btnUp );
	expect( onMoveUp ).toHaveBeenCalled();
} );

it( 'calls "onMoveDown" prop on button up click', () => {
	// Render new instance in every test to prevent leaking state
	const onMoveDown = jest.fn(),
		{ container } = renderWithProvider(
			withDNDWrapper(
				<ControlBlock
					key={ 'test' }
					id={ 'test' }
					index={ 0 }
					onMoveDown={ onMoveDown }
				>
					<p>Testing</p>
				</ControlBlock>
			)
		),
		btnUp = container.querySelector( '.block-button-down' );
	fireEvent.click( btnUp );
	expect( onMoveDown ).toHaveBeenCalled();
} );

it( 'calls "onDelete" prop on button up click', () => {
	// Render new instance in every test to prevent leaking state
	const onDelete = jest.fn(),
		{ container } = renderWithProvider(
			withDNDWrapper(
				<ControlBlock
					key={ 'test' }
					id={ 'test' }
					index={ 0 }
					onDelete={ onDelete }
				>
					<p>Testing</p>
				</ControlBlock>
			)
		),
		btnUp = container.querySelector( '.block-button-delete' );
	fireEvent.click( btnUp );
	expect( onDelete ).toHaveBeenCalled();
} );

it( 'should handle disabled buttons correctly', () => {
	const testFunction = jest.fn(),
		{ container } = renderWithProvider(
			withDNDWrapper(
				<ControlBlock
					key={ 'test' }
					id={ 'test' }
					index={ 0 }
					disableUp={ true }
					disableDown={ true }
					disableDelete={ true }
					onMoveUp={ testFunction }
					onMoveDown={ testFunction }
					onDelete={ testFunction }
				>
					<p>Testing</p>
				</ControlBlock>
			)
		);
	expect(
		container.querySelector( '.block-button-up' )
	).not.toBeInTheDocument();
	expect(
		container.querySelector( '.block-button-down' )
	).not.toBeInTheDocument();
	expect(
		container.querySelector( '.block-button-delete' )
	).not.toBeInTheDocument();
} );

// it( 'should not have basic accessibility issues', async () => {
// 	const { container } = renderWithProvider(
// 			withDNDWrapper(
// 				<ControlBlock key={ 'test' } id={ 'test' } index={ 0 }>
// 					<p>Testing</p>
// 				</ControlBlock>
// 			)
// 		),
// 		results = await axe( container );
// 	expect( results ).toHaveNoViolations();
// } );
