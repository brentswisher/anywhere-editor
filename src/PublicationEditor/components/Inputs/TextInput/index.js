import React from 'react';
import { FieldLabel } from '../';
export function TextInput( {
	label,
	name,
	autoFocus,
	value,
	onChange,
	labelHidden,
	helpText,
} ) {
	return (
		<React.Fragment>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<input
				type="text"
				autoFocus={ autoFocus }
				name={ name }
				id={ name }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) }
			/>
			{ helpText && <span className="help-text"> { helpText } </span> }
		</React.Fragment>
	);
}

export default TextInput;
