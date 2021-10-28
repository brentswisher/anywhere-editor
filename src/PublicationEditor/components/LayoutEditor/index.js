import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import {
	addContentItem,
	selectContent,
	moveItem,
	removeContentItem,
	setContentItemData,
} from './layoutSlice';

import ControlBlock from '../ControlBlock';
import {
	HeadingControl,
	ContentControl,
	VideoControl,
	ImageControl,
} from '../Controls/';

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
			Image: {
				control: ImageControl,
				displayName: 'Image',
				isMainItem: true,
			},
			Video: {
				control: VideoControl,
				displayName: 'Video',
				isMainItem: true,
			},
		};
	return (
		<div id="publicatioEditorLayout">
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
									<ControlBlock
										key={ item.id }
										id={ item.id }
										index={ index }
										onMoveUp={ () =>
											dispatch(
												moveItem( {
													currentIndex: index,
													newIndex: index - 1,
												} )
											)
										}
										onMoveDown={ () =>
											dispatch(
												moveItem( {
													currentIndex: index,
													newIndex: index + 1,
												} )
											)
										}
										onDelete={ () =>
											dispatch(
												removeContentItem( index )
											)
										}
										disableUp={ index === 0 }
										disableDown={
											index === content.length - 1
										}
									>
										<TheControl
											setData={ ( data ) =>
												dispatch(
													setContentItemData( {
														index,
														data,
													} )
												)
											}
											{ ...item.data }
										/>
									</ControlBlock>
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
