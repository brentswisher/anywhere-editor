import React from 'react';
import FieldLabel from './';

export default {
	title: 'Inputs/FieldLabel',
	component: FieldLabel,
	args: {
		htmlFor: 'title',
		visuallyHidden: false,
		labelText: 'Title:',
	},
};

export const _default = ( args ) => {
	return (
		<React.Fragment>
			<FieldLabel
				htmlFor={ args.htmlFor }
				visuallyHidden={ args.visuallyHidden }
			>
				{ args.labelText }
			</FieldLabel>
			<input type="text" name={ args.htmlFor } id={ args.htmlFor } />
		</React.Fragment>
	);
};
