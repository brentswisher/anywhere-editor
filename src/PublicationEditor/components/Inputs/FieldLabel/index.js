import React from 'react';

export function FieldLabel( { htmlFor, visuallyHidden, children } ) {
	let labelClasses = '';
	if ( visuallyHidden ) {
		labelClasses += 'sr-only';
	}
	return (
		<label htmlFor={ htmlFor } className={ labelClasses }>
			{ children }
		</label>
	);
}
export default FieldLabel;
