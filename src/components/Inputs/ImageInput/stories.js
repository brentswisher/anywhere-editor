import { useState } from 'react';
import ImageInput from './';

export default {
	title: 'Inputs/ImageInput',
	component: ImageInput,
	args: {
		name: 'image',
		label: 'Image:',
		labelHidden: false,
		helpText: '',
		sizes: [ 500, 1000, 1200, 1500 ],
		thumbnailPath: '',
		maxFileSize: 300000,
	},
};

export const _default = ( args ) => {
	const [ src, setSrc ] = useState( args.src ?? '' );
	return (
		<ImageInput
			label={ args.label }
			labelHidden={ args.labelHidden }
			name={ args.name }
			helpText={ args.helpText }
			setError={ () => null }
			maxFileSize={ args.maxFileSize }
			sizes={ args.sizes }
			thumbnailPath={ args.thumbnailPath }
			src={ src }
			onChange={ setSrc }
		/>
	);
};
