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
					{ ...provided.dragHandleProps }
					ref={ provided.innerRef }
				>
					{ children }
					<button disabled={ disableUp } onClick={ onMoveUp }>
						Up
					</button>
					<button disabled={ disableDown } onClick={ onMoveDown }>
						Down
					</button>
					<button disabled={ disableDelete } onClick={ onDelete }>
						Delete
					</button>
				</div>
			) }
		</Draggable>
	);
}

export default ControlBlock;
