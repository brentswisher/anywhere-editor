import React from 'react';
import { FieldLabel } from '..';
import { useSelector } from 'react-redux';
import { selectCssClasses, selectIcons } from '../../LayoutEditor/configSlice';

export function IconInput( { label, name, value, onChange, helpText } ) {
	const cssClasses = useSelector( selectCssClasses ),
		iconSet = useSelector( selectIcons );
	console.log( Object.keys( iconSet ) );
	return (
		<fieldset>
			<legend>Select an Icon</legend>
			{ Object.keys( iconSet ).map( ( icon ) => {
				console.log( icon );
				return (
					<FieldLabel htmlFor={ `${ name }-${ icon }` } key={ icon }>
						<input
							type="radio"
							name={ name }
							id={ `${ name }-${ icon }` }
							value={ icon }
							checked={ value === icon }
							className={ cssClasses[ 'input' ] }
							onChange={ ( e ) => onChange( e.target.checked ) }
						/>
						{ icon }
					</FieldLabel>
				);
			} ) }
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</fieldset>
	);
}

export default IconInput;
