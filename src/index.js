import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { LayoutEditor } from './components';

export function AnywhereEditor( {
	content,
	template,
	controls,
	config,
	customControls,
} ) {
	let initalContent;
	if ( content.length ) {
		initalContent = content;
	} else if ( template.length ) {
		initalContent = template;
	} else {
		//Default to a blank content control so it isn't empty which is confusing to users
		initalContent = [
			{
				id: '5249',
				type: 'article-content',
				position: 'position-offset-full',
				innerContent: [
					{
						id: '8466',
						type: 'Heading',
						data: { text: 'Hello!', level: 1 },
					},
				],
			},
			{
				id: '9544',
				type: 'article-content',
				position: 'position-full',
				innerContent: [
					{
						id: '89',
						type: 'Content',
						data: {
							title: '',
							content:
								"<p>This is where you can edit your article's content. Use the buttons on the bottom to add different kinds of content. You can move a row and adjust its position on the page by using the buttons on the upper left of a block when you hover over it.</p>",
						},
					},
				],
			},
		];
	}
	return (
		<Provider store={ store }>
			<div id="anywhere-editor">
				<LayoutEditor
					initialContent={ initalContent }
					controls={ controls }
					customControls={ customControls }
					config={ config }
				/>
			</div>
		</Provider>
	);
}

AnywhereEditor.defaultProps = {
	content: [],
	template: [],
	controls: [ 'Heading', 'Content', 'Quote', 'Image', 'Gallery', 'Video' ],
	customControls: {},
	config: {},
};

export default AnywhereEditor;
