import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export function ControlBlock( {
	id,
	index,
	onMoveUp,
	onMoveDown,
	onDelete,
	disableUp,
	disableDown,
	disableDelete,
	children,
} ) {
	return (
		<Draggable draggableId={ id } index={ index }>
			{ ( provided ) => (
				<div
					className="block"
					key={ id }
					{ ...provided.draggableProps }
					ref={ provided.innerRef }
				>
					{ children }
					<span
						className="block-button-drag"
						{ ...provided.dragHandleProps }
					>
						Drag
					</span>
					<button
						className="block-button-up"
						disabled={ disableUp }
						onClick={ onMoveUp }
					>
						Up
					</button>
					<button
						className="block-button-down"
						disabled={ disableDown }
						onClick={ onMoveDown }
					>
						Down
					</button>
					<button
						className="block-button-delete"
						disabled={ disableDelete }
						onClick={ onDelete }
					>
						Delete
					</button>
				</div>
			) }
		</Draggable>
	);
}

export default ControlBlock;
