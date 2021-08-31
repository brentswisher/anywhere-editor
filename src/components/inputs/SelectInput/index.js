import React from 'react';

export default function SelectInput( props ) {
	return (
		<div>
			<label htmlFor={ props.fieldName }>
				{ props.fieldLabel }
			</label>
			<select name={ props.fieldName } id={ props.fieldName } value={ props.value } onChange={ ( e ) => props.onChange( e.target.value ) }>
				{
					props.options.map( ( item, index ) =>
						(
							<option value={ item.value } key={ props.fieldName + '_' + index }>{ item.title }</option>
						),
					)
				}
			</select>
		</div>
	);
}