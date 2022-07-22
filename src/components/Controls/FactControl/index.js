import React, { useState } from 'react';
import { ColorInput, RichTextInput, IconInput, TextInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses, selectColors } from '../../LayoutEditor/configSlice';

export function FactControl( {
	name,
	icon,
	title,
	subtitle,
	content,
	color,
	setData,
} ) {
	const [ editing, setEditing ] = useState( false ),
		colorOptions = useSelector( selectColors ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<FactEditor
				icon={ icon }
				title={ title }
				subtitle={ subtitle }
				content={ content }
				color={ color }
				colors={ colorOptions }
				setData={ setData }
				toggleEditable={ toggleEditable }
				name={ name }
			/>
		);
	}
	return (
		<FactDisplay
			icon={ icon }
			title={ title }
			subtitle={ subtitle }
			content={ content }
			color={ color }
			onClick={ toggleEditable }
		/>
	);
}

FactControl.defaultProps = {
	color: '',
	content: '',
	editing: false,
	icon: '',
	subtitle: '',
	title: '',
};

function FactEditor( props ) {
	const [ icon, setIcon ] = useState( props.icon ),
		[ title, setTitle ] = useState( props.title ),
		[ subtitle, setSubtitle ] = useState( props.subtitle ),
		[ content, setContent ] = useState( props.content ),
		[ color, setColor ] = useState( props.color ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! content.length ) {
				setError( 'Please enter some content to continue' );
			} else {
				props.setData( {
					icon,
					title,
					subtitle,
					content,
					color,
				} );
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
			<IconInput
				name="factIcon"
				label="Icon"
				value={ icon }
				onChange={ setIcon }
			/>
			<TextInput
				name="factTitle"
				label="Title"
				value={ title }
				onChange={ setTitle }
			/>
			<TextInput
				name="factSubtitle"
				label="Sub-Title"
				value={ subtitle }
				onChange={ setSubtitle }
			/>
			<RichTextInput
				name="factContent"
				label="Content"
				value={ content }
				onChange={ setContent }
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

function FactDisplay( props ) {
	const cssClasses = useSelector( selectCssClasses );
	return (
		<div
			onClick={ props.onClick }
			style={ { color: props.color } }
			className={ cssClasses[ `text-align-${ props.textAlign }` ] }
		>
			{ props.title && (
				<h2 className={ cssClasses[ 'content-heading' ] }>
					{ props.title }
				</h2>
			) }
			<div
				className={ cssClasses[ 'content-body' ] }
				dangerouslySetInnerHTML={ {
					__html: props.content
						? props.content
						: '<br /><p style="text-align:center;">[Enter Content Here]</p><br />',
				} }
			></div>
		</div>
	);
}
export default FactControl;
