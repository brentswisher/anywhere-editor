import { useState } from 'react';

// import { text, number, boolean } from '@storybook/addon-knobs';
import RichTextInput from './';

export default { title: 'Inputs/RichTextInput', component: RichTextInput };

export const _default = ( args ) => {
	const [ value, setValue ] = useState( args.value ?? '' );
	return (
		<RichTextInput
			label="Body Content"
			value={ value }
			onChange={ setValue }
		/>
	);
};
