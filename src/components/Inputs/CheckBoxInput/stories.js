import { useState } from 'react';
import CheckBoxInput from './';

export default {
	title: 'Inputs/CheckBoxInput',
	component: CheckBoxInput,
	args: {
		label: 'This is active',
		checked: false,
		helpText: '',
	},
};

export const _default = ( args ) => {
	const [ checked, setChecked ] = useState( args.checked );
	return (
		<CheckBoxInput
			label={ args.label }
			name="isActive"
			value="1"
			checked={ checked }
			onChange={ setChecked }
			helpText={ args.helpText }
		/>
	);
};
