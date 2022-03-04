import React from 'react';
import { FieldLabel } from '..';
import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function CheckBoxInput( {
	label,
	name,
	value,
	checked,
	onChange,
	helpText,
} ) {
	const cssClasses = useSelector( selectCssClasses );
	return (
		<React.Fragment>
			<FieldLabel htmlFor={ name }>
				<input
					type="checkbox"
					name={ name }
					id={ name }
					value={ value }
					checked={ checked }
					className={ cssClasses[ 'input' ] }
					onChange={ ( e ) => onChange( e.target.checked ) }
				/>
				{ label }
			</FieldLabel>
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</React.Fragment>
	);
}

export default CheckBoxInput;
