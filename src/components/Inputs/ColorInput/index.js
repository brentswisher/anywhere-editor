import React from 'react';
import { FieldLabel } from '..';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function ColorInput( {
	value,
	name,
	colors,
	label,
	onChange,
	labelHidden,
	helpText,
	showDefault,
} ) {
	const cssClasses = useSelector( selectCssClasses );
	return (
		<div>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<div
				className={ cssClasses[ 'color-picker' ] }
				style={ { display: 'flex' } }
			>
				{ value && (
					<div
						className={ cssClasses[ 'color-picker-sample' ] }
						style={ {
							backgroundColor: value,
							width: '3em',
							height: '2.45em',
						} }
					></div>
				) }
				<div>
					<select
						name={ name }
						id={ name }
						value={ value }
						onChange={ ( e ) => onChange( e.target.value ) }
					>
						{ showDefault && (
							<option value="" key={ name + '_default' }>
								{ ' ' }
								Default
							</option>
						) }
						{ Object.keys( colors ).map( ( item, index ) => (
							<option
								value={ colors[ item ] }
								key={ name + '_' + index }
							>
								{ item }
							</option>
						) ) }
					</select>
				</div>
			</div>
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ helpText }
				</span>
			) }
		</div>
	);
}

ColorInput.defaultProps = {
	name: 'ColorInput',
	colors: {},
	value: '',
	label: 'Color:',
	showDefault: true,
};

export default ColorInput;
