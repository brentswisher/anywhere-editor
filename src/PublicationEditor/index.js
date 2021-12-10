import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { LayoutEditor } from './components/';

export function PublicationEditor( {
	content,
	template,
	controls,
	customControls,
} ) {
	const initalContent =
		! content.length && template.length ? template : content;
	return (
		<Provider store={ store }>
			<LayoutEditor
				initialContent={ initalContent }
				controls={ controls }
				customControls={ customControls }
			/>
		</Provider>
	);
}

PublicationEditor.defaultProps = {
	content: [],
	template: [],
	controls: [ 'Heading', 'Content', 'Quote', 'Image', 'Gallery', 'Video' ],
	customControls: {},
};

export default PublicationEditor;
