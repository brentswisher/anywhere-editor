import { useState } from 'react';

// import { text, number, boolean } from '@storybook/addon-knobs';
import AnywhereEditor from './';

export default { title: 'AnywhereEditor', component: AnywhereEditor };

export const _default = ( args ) => {
	const [ content ] = useState( args.content ?? [] );
	return (
		<AnywhereEditor
			content={ content }
			template={ [] }
			controls={ [
				'Heading',
				'Content',
				'Gallery',
				'Quote',
				'Video',
				'Image',
			] }
		/>
	);
};
