import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import {
	addContentItem,
	selectContent,
	moveItem,
	setContent,
	removeContentItem,
	setContentItemData,
} from './layoutSlice';

import ControlBlock from '../ControlBlock';
import {
	ContentControl,
	GalleryControl,
	HeadingControl,
	ImageControl,
	QuoteControl,
	VideoControl,
} from '../Controls/';

export function LayoutEditor( { initialContent, controls } ) {
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
			Gallery: {
				control: GalleryControl,
				displayName: 'Gallery',
				isMainItem: true,
			},
			Video: {
				control: VideoControl,
				displayName: 'Video',
				isMainItem: true,
			},
			Quote: {
				control: QuoteControl,
				displayName: 'Quote',
				isMainItem: true,
			},
		};

	useEffect( () => {
		dispatch( setContent( initialContent ) );
	}, [ dispatch, initialContent ] );

	return (
		<div id="publicationEditorLayout">
			<input
				type="hidden"
				name="chunkJSON"
				id="chunkJSON"
				value={ JSON.stringify( content ) }
			/>
			;
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
							{ content.map( ( row, rowIndex ) => {
								// This is how to create a React component from a string of its neam
								// https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
								return (
									<div className={ row.type } key={ row.id }>
										<ControlBlock
											id={ row.id }
											index={ rowIndex }
											onMoveUp={ () =>
												dispatch(
													moveItem( {
														currentIndex: rowIndex,
														newIndex: rowIndex - 1,
													} )
												)
											}
											onMoveDown={ () =>
												dispatch(
													moveItem( {
														currentIndex: rowIndex,
														newIndex: rowIndex + 1,
													} )
												)
											}
											onDelete={ () =>
												dispatch(
													removeContentItem(
														rowIndex
													)
												)
											}
											disableUp={ rowIndex === 0 }
											disableDown={
												rowIndex === content.length - 1
											}
										>
											{ row.innerContent.map(
												( column, columnIndex ) => {
													const TheControl =
														controlLibrary[
															column.type
														].control;
													return (
														<TheControl
															key={ column.id }
															setData={ (
																data
															) =>
																dispatch(
																	setContentItemData(
																		{
																			rowIndex,
																			columnIndex,
																			data,
																		}
																	)
																)
															}
															{ ...column.data }
														/>
													);
												}
											) }
										</ControlBlock>
									</div>
								);
							} ) }
							{ provided.placeholder }
						</div>
					) }
				</Droppable>
			</DragDropContext>
			<div className="article-content">
				<div className="content-buttons button-group">
					{ controls.map( ( controlName ) => (
						<button
							onClick={ () =>
								dispatch(
									addContentItem( {
										id: parseInt(
											Math.random() * 10000
										).toString(),
										type: 'article-content',
										innerContent: [
											{
												id: parseInt(
													Math.random() * 10000
												).toString(),
												type: controlName,
												data: {},
											},
										],
									} )
								)
							}
							key={ controlName }
							className="button secondary"
						>
							Add { controlLibrary[ controlName ].displayName }
						</button>
					) ) }
				</div>
			</div>
		</div>
	);
}

LayoutEditor.defaultProps = {
	controls: [],
	template: [],
};

export default LayoutEditor;
