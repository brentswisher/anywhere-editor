import { useState } from 'react';
import ColorInput from '.';

export default {
	title: 'Inputs/ColorInput',
	component: ColorInput,
	args: {
		name: 'backgroundColor',
		label: 'Background Color:',
		value: 'black',
		labelHidden: false,
		helpText: '',
		colors: {
			black: '#0a0a0a',
			teal: '#006666',
			brown: '#6F4923',
		},
	},
};

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<ColorInput
			name={ args.name }
			label={ args.label }
			labelHidden={ args.labelHidden }
			helpText={ args.helpText }
			onChange={ setValue }
			value={ value }
			colors={ args.colors }
		/>
	);
};
