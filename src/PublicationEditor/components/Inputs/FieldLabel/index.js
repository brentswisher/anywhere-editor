import React from 'react';

export function FieldLabel( { htmlFor, visuallyHidden, children } ) {
	let labelClasses = '';
	if ( visuallyHidden ) {
		labelClasses += 'sr-only';
	}
	return (
		<React.Fragment>
			<label htmlFor={ htmlFor } className={ labelClasses }>
				{ children }
			</label>
		</React.Fragment>
	);
}
export default FieldLabel;
