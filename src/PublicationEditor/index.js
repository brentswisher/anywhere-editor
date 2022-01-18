import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { LayoutEditor } from './components/';

export function PublicationEditor( {
	content,
	template,
	controls,
	config,
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
				config={ config }
			/>
		</Provider>
	);
}

PublicationEditor.defaultProps = {
	content: [],
	template: [],
	controls: [ 'Heading', 'Content', 'Quote', 'Image', 'Gallery', 'Video' ],
	customControls: {},
	config: {},
};

export default PublicationEditor;
