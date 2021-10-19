import { useState } from 'react';

// import { text, number, boolean } from '@storybook/addon-knobs';
import ContentControl from './';

export default { title: 'Controls/ContentControl', component: ContentControl };

export const _default = ( args ) => {
	const [ content, setContent ] = useState( args.value ?? '' );
	return (
		<ContentControl
			label="Body Content"
			content={ content }
			onChange={ setContent }
		/>
	);
};
