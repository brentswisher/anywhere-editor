import React, { useState } from 'react';

import { TextInput, SelectInput } from './components/inputs';

export default function PublicationEditor( props ) {
	const [ exampleText, setExampleText ] = useState( 'test' ),
		[ position, setPosition ] = useState( 'left' );
	return (
		<div>
			<TextInput
				label="Test Input"
				name="text"
				value={ exampleText }
				onChange={ setExampleText }
			/>

			<SelectInput
				fieldName="position"
				fieldLabel="Alignment"
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
		</div>
	);
}
