import React, { useState } from 'react';
import { TextInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function HeadingControl( { name, level, text, setData, required } ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<HeadingEditor
				text={ text }
				level={ level }
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
			name={ name }
			onClick={ () => toggleEditable() }
		/>
	);
}

HeadingControl.defaultProps = {
	text: '',
	level: 1,
	required: false,
};

function HeadingEditor( props ) {
	const [ text, setText ] = useState( props.text ),
		// [ level, setLevel ] = useState( props.level ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! text.length ) {
				setError( 'Please enter an article heading to continue' );
			} else {
				props.setData( { text, level: 1 } );
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
				fieldLabel="Heading Text"
				autoFocus={ true }
				value={ text }
				onChange={ setText }
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
			className={ cssClasses[ `heading-${ props.level }` ] }
		>
			{ props.text ? props.text : '[Enter heading text here]' }
			<input type="hidden" name={ props.name } value={ props.text } />
		</HeadingEl>
	);
}

export default HeadingControl;
