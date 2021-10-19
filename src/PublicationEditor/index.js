import React from 'react';
import { LayoutEditor } from './components/';

export function PublicationEditor( { content, controls } ) {
	const defaultControls = [ 'Heading', 'Content', 'Video' ];
	return <LayoutEditor controls={ controls || defaultControls } />;
}

export default PublicationEditor;
