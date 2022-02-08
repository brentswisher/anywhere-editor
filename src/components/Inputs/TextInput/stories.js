import { useState } from 'react';
import TextInput from './';

export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	args: {
		label: 'Author Name:',
		labelHidden: false,
		helpText: '',
	},
};

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<TextInput
			label={ args.label }
			name="title"
			value={ value }
			onChange={ setValue }
			labelHidden={ args.labelHidden }
			helpText={ args.helpText }
		/>
	);
};
