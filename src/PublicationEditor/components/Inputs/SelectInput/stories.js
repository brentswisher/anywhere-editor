import { useState } from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import SelectInput from './';

export default { title: 'Inputs/SelectInput', component: SelectInput };

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<SelectInput
			name="alignment"
			label="Alignment:"
			onChange={ setValue }
			value={ value }
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
		/>
	);
};
