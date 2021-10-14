import { useState } from 'react';

// import { text, number, boolean } from '@storybook/addon-knobs';
import TextInput from './';

export default { title: 'Inputs/TextInput', component: TextInput };

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<TextInput
			label="Title"
			name="title"
			value={ value }
			onChange={ setValue }
		/>
	);
};
