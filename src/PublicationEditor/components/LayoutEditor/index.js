import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addContentItem,
	removeContentItem,
	selectContent,
} from './layoutSlice';

export function LayoutEditor() {
	const content = useSelector( selectContent ),
		dispatch = useDispatch();

	console.log( content );
	return (
		<div>
			<button onClick={ () => dispatch( addContentItem( 'test' ) ) }>
				Add Content Item
			</button>
			<button onClick={ () => dispatch( removeContentItem( 0 ) ) }>
				Remove Content Item
			</button>

			<ul>
				<li>{ JSON.stringify( content ) }</li>
			</ul>
		</div>
	);
}

export default LayoutEditor;
