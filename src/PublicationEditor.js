import React, { useState } from 'react';

import { TextInput } from './components/inputs';


export default function PublicationEditor( props ) {
	const [exampleText, setExampleText] = useState('test');
	return (
		<div>
			<TextInput label="Test Input" name="text" value={ exampleText } onChange={ setExampleText } />
		</div>
	)
}