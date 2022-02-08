import React from 'react';
import { FieldLabel } from '..';
import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function SelectInput( {
	label,
	name,
	options,
	value,
	onChange,
	labelHidden,
	helpText,
} ) {
	const cssClasses = useSelector( selectCssClasses );
	return (
		<div>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<select
				name={ name }
				id={ name }
				value={ value }
				className={ cssClasses[ 'input' ] }
				onChange={ ( e ) => onChange( e.target.value ) }
			>
				{ options.map( ( item, index ) => (
					<option value={ item.value } key={ item.value.toString() }>
						{ item.title }
					</option>
				) ) }
			</select>
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</div>
	);
}

export default SelectInput;
