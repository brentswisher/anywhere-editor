import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addContentItem,
	removeContentItem,
	selectContent,
	moveItem,
} from './layoutSlice';

export function LayoutEditor() {
	const content = useSelector( selectContent ),
		dispatch = useDispatch(),
		newItem = {
			id: parseInt( Math.random() * 10000 ),
			type: 'Content',
			data: {},
		};
	return (
		<div>
			<button onClick={ () => dispatch( addContentItem( newItem ) ) }>
				Add Content Item
			</button>
			<ul>
				{ content.map( ( item, index ) => (
					<li key={ item.id }>
						{ JSON.stringify( item ) } )
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
					</li>
				) ) }
			</ul>
		</div>
	);
}

export default LayoutEditor;
