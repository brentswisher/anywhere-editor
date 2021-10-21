import React from 'react';

export function FieldLabel( { htmlFor, text, visuallyHidden, children } ) {
	let labelClasses = '';
	if ( visuallyHidden ) {
		labelClasses += 'sr-only';
	}
	return (
		<React.Fragment>
			<label htmlFor={ htmlFor } className={ labelClasses }>
				{ text }
			</label>
		</React.Fragment>
	);
}
export default FieldLabel;
