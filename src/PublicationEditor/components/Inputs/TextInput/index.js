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
	let labelClass = '';
	if ( labelHidden ) {
		labelClass += 'sr-only';
	}
	return (
		<React.Fragment>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>

			<FieldLabel
				htmlFor={ name }
				className={ labelClass }
				visuallyHidden={ labelHidden }
				text={ label }
			/>
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
