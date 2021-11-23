import React, { useState } from 'react';
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
	const [ isFocused, setFocused ] = useState( false );
	let containerClass = 'controlContainer';
	if ( isFocused ) {
		containerClass += ' active';
	}
	return (
		<Draggable draggableId={ id } index={ index }>
			{ ( provided, snapshot ) => (
				<div
					key={ id }
					className={ containerClass }
					{ ...provided.draggableProps }
					ref={ provided.innerRef }
					onMouseEnter={ () => setFocused( true ) }
					onMouseLeave={ () => setFocused( false ) }
				>
					<ul className="menu chunkActions chunkActions-full">
						<li>
							<a
								className="button secondary"
								{ ...provided.dragHandleProps }
							>
								&#10021;
							</a>
						</li>
						<li>
							<button
								className="button secondary"
								disabled={ disableUp }
								onClick={ onMoveUp }
							>
								&uarr;
								<span className="show-for-sr">Move Up</span>
							</button>
						</li>
						<li>
							<button
								className="button secondary"
								disabled={ disableDown }
								onClick={ onMoveDown }
							>
								&darr;
								<span className="show-for-sr">Move Down</span>
							</button>
						</li>
						<li>
							<button
								className="button alert"
								disabled={ disableDelete }
								onClick={ onDelete }
							>
								X<span className="show-for-sr">Delete</span>
							</button>
						</li>
					</ul>
					{ children }
				</div>
			) }
		</Draggable>
	);
}

export default ControlBlock;
