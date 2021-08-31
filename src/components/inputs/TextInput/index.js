import React from 'react';

export function TextInput( {
	label,
	name,
	autoFocus,
	value,
	onChange,
	labelHidden,
	helpText
} ) {

	let labelClass = '';
	if( labelHidden ) {
		labelClass += 'sr-only';
	}
	return (
		<React.Fragment>
			<label htmlFor={ name } className={ labelClass }>
				{ label }
			</label>
			<input
				type="text"
				autoFocus={ autoFocus } 
				name={ name }
				id={ name }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) } 
			/>
			{ 
				helpText && 
				<span className="help-text"> { helpText } </span>
			}
		</React.Fragment>
	);
}

export default TextInput;