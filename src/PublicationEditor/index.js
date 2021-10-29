import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { LayoutEditor } from './components/';

export function PublicationEditor( { content, template, controls } ) {
	const initalContent =
		! content.length && template.length ? template : content;
	return (
		<Provider store={ store }>
			<LayoutEditor
				initialContent={ initalContent }
				controls={ controls }
			/>
			;
		</Provider>
	);
}

PublicationEditor.defaultProps = {
	content: [],
	template: [],
	controls: [ 'Heading', 'Content', 'Image', 'Video' ],
};

export default PublicationEditor;
