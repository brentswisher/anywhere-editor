import React from 'react';
import { LayoutEditor } from './components/';

export function PublicationEditor( { content, controls } ) {
	const defaultControls = [ 'Heading', 'Content' ];
	return <LayoutEditor controls={ controls || defaultControls } />;
}

export default PublicationEditor;
