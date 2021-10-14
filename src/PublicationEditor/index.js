import React from 'react';
import { LayoutEditor } from './components/';

export function PublicationEditor( { content, controls } ) {
	// const [ image, setImage ] = useState( '' ),
	// [ content ] = useState( [] ),
	// [ error, setError  ] = useState( { errorMessaage: ''} );
	const defaultControls = [ 'Heading' ];
	return <LayoutEditor controls={ controls || defaultControls } />;
}

export default PublicationEditor;
