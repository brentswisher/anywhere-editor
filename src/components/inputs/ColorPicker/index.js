import React from 'react';

export default function ColorPicker( props ) {
	const colors = {
			black: '#0a0a0a',
			brown: '#6F4923',
			cyprus: '#003333',
			eggplant: '#990066',
			'forest-green': '#003400',
			grape: '#990099',
			gray: '#757575',
			green: '#336600',
			'gvsu-blue': '#0065a4',
			maroon: '#660000',
			navy: '#000066',
			'nin-blue': '#0032A0',
			'nin-purple': '#660099',
			olive: '#666600',
			pink: '#cc0066',
			plum: '#610061',
			red: '#cc0000',
			'red-brown': '#993300',
			'red-orange': '#cc3300',
			'rgb-blue': '#0000FF',
			'rgb-purple': '#6200FF',
			rust: '#996600',
			teal: '#006666',
		},
		colorAliases = {
			smalt: 'nin-blue',
			'navy-blue': 'navy',
			mosque: 'teal',
			indigo: 'nin-purple',
			'dark-magenta': 'grape',
			'mardigras-purple': 'plum',
			ruby: 'pink',
			'freespeech-red': 'red',
			'harleydavidson-orange': 'red-orange',
			'golden-brown': 'rust',
			'verdun-green': 'green',
		};

	let currentValue = 'black';
	if ( props.value in colors ) {
		currentValue = props.value;
	} else if ( props.value in colorAliases ) {
		currentValue = colorAliases[ props.value ];
	}

	return (
		<div>
			<label htmlFor={ props.fieldName }>
				{ props.fieldLabel }
			</label>
			<div className="row">
				<div className="small-1 column" style={ { backgroundColor: colors[ currentValue ], height: 2.25 + 'em' } }>
				</div>
				<div className="small-11 column">
					<select name={ props.fieldName } id={ props.fieldName } value={ currentValue } onChange={ ( e ) => props.onChange( e.target.value ) }>
						{
							Object.keys( colors ).map( ( item, index ) =>
								(
									<option value={ item.value } key={ props.fieldName + '_' + index }>{ item }</option>
								),
							)
						}
					</select>
				</div>
			</div>
		</div>
	);
}