import React, { useState } from 'react';
import { ColorInput, SelectInput, TextInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses, selectColors } from '../../LayoutEditor/configSlice';

export function HeadingControl( {
	name,
	level,
	text,
	color,
	setData,
	required,
} ) {
	const [ editing, setEditing ] = useState( false ),
		colorOptions = useSelector( selectColors ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<HeadingEditor
				text={ text }
				level={ level }
				color={ color }
				colors={ colorOptions }
				required={ required }
				setData={ setData }
				toggleEditable={ toggleEditable }
				name={ name }
			/>
		);
	}
	return (
		<HeadingDisplay
			text={ text }
			level={ level }
			color={ color }
			name={ name }
			onClick={ () => toggleEditable() }
		/>
	);
}

HeadingControl.defaultProps = {
	text: '',
	level: 1,
	color: '',
	required: false,
};

function HeadingEditor( props ) {
	const [ text, setText ] = useState( props.text ),
		[ level, setLevel ] = useState( props.level ),
		[ color, setColor ] = useState( props.color ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! text.length ) {
				setError( 'Please enter an article heading to continue' );
			} else {
				props.setData( { text, level, color } );
				setError( '' );
				props.toggleEditable();
			}
		},
		cancelChanges = () => props.toggleEditable();

	return (
		<EditModal
			saveChanges={ saveChanges }
			cancelChanges={ cancelChanges }
			error={ error }
		>
			<TextInput
				name={ props.name + '_text' }
				label="Heading Text"
				autoFocus={ true }
				value={ text }
				onChange={ setText }
			/>
			<SelectInput
				name={ props.name + '_level' }
				label="Heading Level"
				value={ level }
				onChange={ setLevel }
				options={ [
					{ title: 'Main Heading (Limit One Per Page)', value: '1' },
					{ title: 'Sub-Heading', value: '2' },
				] }
			/>
			<ColorInput
				name="color"
				label="Font Color"
				colors={ props.colors }
				value={ color }
				onChange={ setColor }
			/>
		</EditModal>
	);
}

function HeadingDisplay( props ) {
	const cssClasses = useSelector( selectCssClasses ),
		validHeadings = [ 1, 2, 3, 4 ],
		HeadingEl =
			'h' + ( validHeadings.indexOf( props.level ) ? props.level : '1' );
	return (
		<HeadingEl
			tabIndex="0"
			onClick={ props.onClick }
			style={ { color: props.color } }
			className={ cssClasses[ `heading-${ props.level }` ] }
		>
			{ props.text ? props.text : '[Enter heading text here]' }
			<input type="hidden" name={ props.name } value={ props.text } />
		</HeadingEl>
	);
}

export default HeadingControl;
