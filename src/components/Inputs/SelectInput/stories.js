import { useState } from 'react';
import SelectInput from './';

export default {
	title: 'Inputs/SelectInput',
	component: SelectInput,
	args: {
		name: 'alignment',
		label: 'Alignment:',
		labelHidden: false,
		helpText: '',
		options: [
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
		],
	},
};

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<SelectInput
			name={ args.name }
			label={ args.label }
			labelHidden={ args.labelHidden }
			helpText={ args.helpText }
			onChange={ setValue }
			value={ value }
			options={ args.options }
		/>
	);
};
