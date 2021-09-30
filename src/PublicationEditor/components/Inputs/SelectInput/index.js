import React from 'react';
import { FieldLabel } from '..';
export function SelectInput( {
	label,
	name,
	options,
	value,
	onChange,
	labelHidden,
	helpText,
} ) {
	return (
		<div>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<select
				name={ name }
				id={ name }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) }
			>
				{ options.map( ( item, index ) => (
					<option value={ item.value } key={ item.value.toString() }>
						{ item.title }
					</option>
				) ) }
			</select>
			{ helpText && <span className="help-text"> { helpText } </span> }
		</div>
	);
}

export default SelectInput;
