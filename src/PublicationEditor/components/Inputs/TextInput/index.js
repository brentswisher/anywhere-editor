import React from 'react';
import { FieldLabel } from '../';
import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function TextInput( {
	label,
	name,
	autoFocus,
	value,
	onChange,
	labelHidden,
	helpText,
} ) {
	const cssClasses = useSelector( selectCssClasses );
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
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</React.Fragment>
	);
}

export default TextInput;
