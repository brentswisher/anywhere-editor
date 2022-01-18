import React from 'react';
import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function FieldLabel( { htmlFor, visuallyHidden, children } ) {
	const cssClasses = useSelector( selectCssClasses ),
		labelClasses = [ cssClasses[ 'label' ] ];

	if ( visuallyHidden ) {
		labelClasses.push( cssClasses[ 'sr-only' ] );
	}
	return (
		<React.Fragment>
			<label htmlFor={ htmlFor } className={ labelClasses.join( ' ' ) }>
				{ children }
			</label>
		</React.Fragment>
	);
}
export default FieldLabel;
