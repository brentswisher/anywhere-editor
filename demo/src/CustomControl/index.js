import React, { useState } from 'react';
import { TextInput } from '../AnywhereEditor/components/Inputs';
import EditModal from '../AnywhereEditor/components/EditModal';

export function CustomControl( { name, level, text, setData, required } ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<CustomEditor
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
		<CustomDisplay
			text={ text }
			level={ level }
			name={ name }
			onClick={ () => toggleEditable() }
		/>
	);
}

CustomControl.defaultProps = {
	text: '',
	level: 1,
	required: false,
};

function CustomEditor( props ) {
	const [ text, setText ] = useState( props.text ),
		// [ level, setLevel ] = useState( props.level ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! text.length ) {
				setError( 'Please enter an article Custom to continue' );
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
				fieldLabel="Custom Text"
				autoFocus={ true }
				value={ text }
				onChange={ setText }
			/>
		</EditModal>
	);
}

function CustomDisplay( props ) {
	const validCustoms = [ 1, 2, 3, 4 ],
		cssClasses = [ 'article-Custom', 'article-subCustom', '', '' ],
		CustomEl =
			'h' + ( validCustoms.indexOf( props.level ) ? props.level : '1' );
	return (
		<CustomEl
			tabIndex="0"
			onClick={ props.onClick }
			className={ cssClasses[ props.level - 1 ] }
		>
			{ props.text ? props.text : '[Enter Custom text here]' }
			<input type="hidden" name={ props.name } value={ props.text } />
		</CustomEl>
	);
}

export default CustomControl;
