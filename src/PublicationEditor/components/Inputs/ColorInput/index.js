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
				<div
					className={ cssClasses[ 'color-picker-sample' ] }
					style={ {
						backgroundColor: colors[ value ],
						height: '2.45em',
						width: '2em',
						paddingRight: '0.5em',
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
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</div>
	);
}

ColorInput.defaultProps = {
	value: 'black',
	name: 'ColorInput',
	colors: {
		black: '#0a0a0a',
		brown: '#6F4923',
		gray: '#757575',
		'gvsu-blue': '#0065a4',
		teal: '#006666',
	},
	label: 'Color:',
};

export default ColorInput;
