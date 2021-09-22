import React from 'react';
import { FieldLabel } from '../';

export default function ColorPicker( {
	value,
	name,
	colors,
	label,
	onChange,
	labelHidden,
	helpText,
} ) {
	return (
		<div>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<div className="color-picker" style={ { display: 'flex' } }>
				<div
					className="color-picker-sample"
					style={ {
						backgroundColor: colors[ value ],
						height: 2.25 + 'em',
					} }
				></div>
				<div>
					<select
						name={ name }
						id={ name }
						value={ value }
						onChange={ ( e ) => onChange( e.target.value ) }
					>
						{ Object.keys( colors ).map( ( item, index ) => (
							<option
								value={ item.value }
								key={ name + '_' + index }
							>
								{ item }
							</option>
						) ) }
					</select>
				</div>
			</div>
			{ helpText && <span className="help-text"> { helpText } </span> }
		</div>
	);
}

ColorPicker.defaultProps = {
	value: 'black',
	name: 'colorPicker',
	colors: {
		black: '#0a0a0a',
		brown: '#6F4923',
		gray: '#757575',
		'gvsu-blue': '#0065a4',
		teal: '#006666',
	},
	label: 'Color:',
};
