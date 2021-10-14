import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import {
	addContentItem,
	removeContentItem,
	selectContent,
	moveItem,
	setContentItemData,
} from './layoutSlice';

import { HeadingControl, ContentControl } from '../Controls/';

export function LayoutEditor( { controls } ) {
	const content = useSelector( selectContent ),
		dispatch = useDispatch(),
		controlLibrary = {
			Heading: {
				control: HeadingControl,
				displayName: 'Heading',
				isMainItem: true,
			},
			Content: {
				control: ContentControl,
				displayName: 'Content',
				isMainItem: true,
			},
		};
	return (
		<div>
			{ controls.map( ( controlName ) => (
				<button
					onClick={ () =>
						dispatch(
							addContentItem( {
								id: parseInt(
									Math.random() * 10000
								).toString(),
								type: controlName,
								data: {},
							} )
						)
					}
					key={ controlName }
				>
					Add { controlLibrary[ controlName ].displayName }
				</button>
			) ) }
			<DragDropContext
				onDragEnd={ ( result ) => {
					const { destination, source } = result;
					if ( ! destination ) {
						//Wasn't dropped anywhere
						return;
					}
					if (
						destination.droppableId === source.droppableId &&
						destination.index === source.index
					) {
						//Set back in the same place
						return;
					}
					dispatch(
						moveItem( {
							currentIndex: result.source.index,
							newIndex: result.destination.index,
						} )
					);
				} }
			>
				<Droppable droppableId={ 'dropper' }>
					{ ( provided ) => (
						<div className="block-list" ref={ provided.innerRef }>
							{ content.map( ( item, index ) => {
								// This is how to create a React component from a string of its neam
								// https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
								const TheControl =
									controlLibrary[ item.type ].control;
								return (
									<Draggable
										draggableId={ item.id }
										key={ item.id }
										index={ index }
									>
										{ ( provided ) => (
											<div
												className="block"
												key={ item.id }
												{ ...provided.draggableProps }
												{ ...provided.dragHandleProps }
												ref={ provided.innerRef }
											>
												<TheControl
													setData={ ( data ) =>
														dispatch(
															setContentItemData(
																{ index, data }
															)
														)
													}
													{ ...item.data }
												/>
												<button
													disabled={ index === 0 }
													onClick={ () =>
														dispatch(
															moveItem( {
																currentIndex: index,
																newIndex:
																	index - 1,
															} )
														)
													}
												>
													Up
												</button>
												<button
													disabled={
														index ===
														content.length - 1
													}
													onClick={ () =>
														dispatch(
															moveItem( {
																currentIndex: index,
																newIndex:
																	index + 1,
															} )
														)
													}
												>
													Down
												</button>
												<button
													onClick={ () =>
														dispatch(
															removeContentItem(
																index
															)
														)
													}
												>
													Delete
												</button>
											</div>
										) }
									</Draggable>
								);
							} ) }
							{ provided.placeholder }
						</div>
					) }
				</Droppable>
			</DragDropContext>
		</div>
	);
}

export default LayoutEditor;
