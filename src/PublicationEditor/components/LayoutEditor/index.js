import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
	addContentItem,
	removeContentItem,
	selectContent,
	moveItem,
	setContentItemData,
} from './layoutSlice';

import { HeadingControl } from '../Controls/';

export function LayoutEditor() {
	const content = useSelector( selectContent ),
		dispatch = useDispatch(),
		newItem = {
			id: parseInt( Math.random() * 10000 ),
			type: 'Heading',
			data: {},
		},
		controls = {
			Heading: HeadingControl,
		};

	return (
		<div>
			<button onClick={ () => dispatch( addContentItem( newItem ) ) }>
				Add Content Item
			</button>
			{ content.map( ( item, index ) => {
				// This is how to create a React component from a string of its neam
				// https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
				const TheControl = controls[ item.type ];
				return (
					<div className="block" key={ item.id }>
						<TheControl
							setData={ ( data ) =>
								dispatch(
									setContentItemData( { index, data } )
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
										newIndex: index - 1,
									} )
								)
							}
						>
							Up
						</button>
						<button
							disabled={ index === content.length - 1 }
							onClick={ () =>
								dispatch(
									moveItem( {
										currentIndex: index,
										newIndex: index + 1,
									} )
								)
							}
						>
							Down
						</button>
						<button
							onClick={ () =>
								dispatch( removeContentItem( index ) )
							}
						>
							Delete
						</button>
					</div>
				);
			} ) }
		</div>
	);
}

export default LayoutEditor;
