import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { useSelector, useDispatch } from 'react-redux';
import { setRowPosition, selectRow } from '../LayoutEditor/layoutSlice';
import { selectCssClasses } from '../LayoutEditor/configSlice';

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
	const [ isFocused, setFocused ] = useState( false ),
		{ buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu( 3 ),
		row = useSelector( ( state ) => selectRow( state, id ) ),
		cssClasses = useSelector( ( state ) => selectCssClasses( state ) ),
		dispatch = useDispatch(),
		handlePositionClick = ( index, item ) => {
			dispatch(
				setRowPosition( {
					rowIndex: index,
					position: item,
				} )
			);
			setIsOpen( false );
		},
		positions = [
			{
				title: 'Normal',
				value: 'position-full',
			},
			{
				title: 'Left',
				value: 'position-left',
			},
			{
				title: 'Right',
				value: 'position-right',
			},
			{
				title: 'Full Page',
				value: 'position-full-page',
			},
			{
				title: 'Offset',
				value: 'position-offset-full',
			},
			{
				title: 'Offset Left',
				value: 'position-offset-left',
			},
			{
				title: 'Offset Right',
				value: 'position-offset-right',
			},
		];

	return (
		<Draggable draggableId={ id } index={ index }>
			{ ( provided, snapshot ) => (
				<div
					key={ id }
					className={
						isFocused || snapshot.isDragging
							? cssClasses[ 'control-container-active' ]
							: cssClasses[ 'control-container' ]
					}
					{ ...provided.draggableProps }
					ref={ provided.innerRef }
					onMouseEnter={ () => setFocused( true ) }
					onMouseLeave={ () => setFocused( false ) }
				>
					<ul
						className={
							isFocused || snapshot.isDragging
								? cssClasses[ 'block-actions-active' ]
								: cssClasses[ 'block-actions' ]
						}
					>
						<li>
							<a
								className={
									cssClasses[ 'button-group-secondary' ]
								}
								{ ...provided.dragHandleProps }
							>
								&#10021;
							</a>
						</li>
						<li>
							<button
								className={
									cssClasses[ 'button-group-secondary' ]
								}
								{ ...buttonProps }
							>
								&#9881;
								<span className={ cssClasses[ 'sr-only' ] }>
									Row Settings
								</span>
							</button>
							<ul
								className={
									isOpen
										? cssClasses[ 'dropdown-list-open' ]
										: cssClasses[ 'dropdown-list' ]
								}
								role="menu"
							>
								{ positions.map( ( { title, value } ) => (
									<li key={ value }>
										<a
											className={
												row.position === value
													? cssClasses[
															'dropdown-button-active'
													  ]
													: cssClasses[
															'dropdown-button'
													  ]
											}
											{ ...itemProps[ 0 ] }
											onClick={ () =>
												handlePositionClick(
													index,
													value
												)
											}
										>
											{ title }
										</a>
									</li>
								) ) }
							</ul>
						</li>

						<li>
							<button
								className={
									cssClasses[ 'button-group-secondary' ]
								}
								disabled={ disableUp }
								onClick={ onMoveUp }
							>
								&uarr;
								<span className={ cssClasses[ 'sr-only' ] }>
									Move Up
								</span>
							</button>
						</li>
						<li>
							<button
								className={
									cssClasses[ 'button-group-secondary' ]
								}
								disabled={ disableDown }
								onClick={ onMoveDown }
							>
								&darr;
								<span className={ cssClasses[ 'sr-only' ] }>
									Move Down
								</span>
							</button>
						</li>
						<li>
							<button
								className={ cssClasses[ 'button-group-alert' ] }
								disabled={ disableDelete }
								onClick={ onDelete }
							>
								X
								<span className={ cssClasses[ 'sr-only' ] }>
									Delete
								</span>
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
