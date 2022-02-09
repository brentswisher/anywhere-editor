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

import { selectCssClasses, mergeConfig } from './configSlice';

import ControlBlock from '../ControlBlock';
import {
	ContentControl,
	GalleryControl,
	HeadingControl,
	ImageControl,
	QuoteControl,
	VideoControl,
} from '../Controls/';

export function LayoutEditor( {
	initialContent,
	controls,
	config,
	customControls,
} ) {
	const content = useSelector( selectContent ),
		cssClasses = useSelector( selectCssClasses ),
		dispatch = useDispatch(),
		controlList = [ ...controls, ...Object.keys( customControls ) ],
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
			...customControls,
		};
	useEffect( () => {
		dispatch( setContent( initialContent ) );
	}, [ dispatch, initialContent ] );
	useEffect( () => {
		dispatch( mergeConfig( config ) );
	}, [ dispatch, config ] );

	return (
		<div>
			<input
				type="hidden"
				name="contentJSON"
				id="contentJSON"
				value={ JSON.stringify( content ) }
			/>
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
						<div
							className={ cssClasses[ 'block-list' ] }
							ref={ provided.innerRef }
						>
							{ content.map( ( row, rowIndex ) => {
								// This is how to create a React component from a string of its neam
								// https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
								return (
									<div
										className={ ` ${
											cssClasses[ row.position ]
										}` }
										key={ row.id }
									>
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
			<div className={ cssClasses[ 'content-buttons' ] }>
				{ controlList.map( ( controlName ) => (
					<button
						type="button"
						onClick={ () => {
							let defaultPosition = 'position-full';
							if ( controlName === 'Heading' ) {
								defaultPosition = 'position-offset';
							}

							return dispatch(
								addContentItem( {
									id: parseInt(
										Math.random() * 10000
									).toString(),
									type: 'article-content',
									position: defaultPosition,
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
							);
						} }
						key={ controlName }
						className={ cssClasses[ 'button-secondary' ] }
					>
						Add { controlLibrary[ controlName ].displayName }
					</button>
				) ) }
			</div>
		</div>
	);
}

LayoutEditor.defaultProps = {
	controls: [],
	template: [],
};

export default LayoutEditor;
