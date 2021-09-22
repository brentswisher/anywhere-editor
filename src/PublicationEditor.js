import React, { useState } from 'react';
import { TextInput, SelectInput, ContentEditor } from './components/inputs';

export default function PublicationEditor( props ) {
	const [ exampleText, setExampleText ] = useState( 'test' ),
		[ position, setPosition ] = useState( 'left' ),
		[ richContent, setRichContent ] = useState( 'Lorem Ipsum' );
	return (
		<div>
			<TextInput
				label="Test Input"
				name="text"
				value={ exampleText }
				onChange={ setExampleText }
			/>

			<SelectInput
				name="position"
				label="Alignment"
				value={ position }
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
				onChange={ setPosition }
			/>
			<ContentEditor
				name="content"
				label="Section Content:"
				value={ richContent }
				onChange={ setRichContent }
			/>
		</div>
	);
}
