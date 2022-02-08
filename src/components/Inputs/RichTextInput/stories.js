import { useState } from 'react';
import RichTextInput from './';

export default {
	title: 'Inputs/RichTextInput',
	component: RichTextInput,
	args: {
		label: 'Author Name:',
		labelHidden: false,
		value: 'Testing',
		helpText: '',
	},
};

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<RichTextInput
			label={ args.label }
			value={ value }
			onChange={ setValue }
			labelHidden={ args.labelHidden }
			helpText={ args.helpText }
		/>
	);
};
