import React, { useState } from 'react';
import {
	ColorInput,
	RichTextInput,
	SelectInput,
	TextInput,
} from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses, selectColors } from '../../LayoutEditor/configSlice';

export function ContentControl( {
	name,
	title,
	content,
	textAlign,
	color,
	setData,
	required,
} ) {
	const [ editing, setEditing ] = useState( false ),
		colorOptions = useSelector( selectColors ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<ContentEditor
				title={ title }
				content={ content }
				textAlign={ textAlign }
				color={ color }
				colors={ colorOptions }
				setData={ setData }
				toggleEditable={ toggleEditable }
				name={ name }
			/>
		);
	}
	return (
		<ContentDisplay
			title={ title }
			content={ content }
			textAlign={ textAlign }
			color={ color }
			onClick={ toggleEditable }
		/>
	);
}

ContentControl.defaultProps = {
	title: '',
	content: '',
	textAlign: 'left',
	color: '',
	editing: false,
};

function ContentEditor( props ) {
	const modules = {
			toolbar: [
				[ 'bold', 'italic' ],
				[ { list: 'ordered' }, { list: 'bullet' } ],
				[ 'link' ],
				[ 'clean' ],
			],
		},
		[ title, setTitle ] = useState( props.title ),
		[ content, setContent ] = useState( props.content ),
		[ textAlign, setTextAlign ] = useState( props.textAlign ),
		[ color, setColor ] = useState( props.color ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! content.length ) {
				setError( 'Please enter some content to continue' );
			} else {
				props.setData( {
					title,
					content,
					textAlign,
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
			<TextInput
				name="contentTitle"
				label="Heading"
				autoFocus={ true }
				value={ title }
				onChange={ setTitle }
			/>
			<RichTextInput
				name="contentContent"
				label="Content"
				modules={ modules }
				value={ content }
				onChange={ setContent }
			/>
			<SelectInput
				name="textAlign"
				label="Text Alignment"
				value={ textAlign }
				options={ [
					{
						value: 'left',
						title: 'Left',
					},
					{
						value: 'right',
						title: 'Right',
					},
					{
						value: 'center',
						title: 'Centered',
					},
				] }
				onChange={ setTextAlign }
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

function ContentDisplay( props ) {
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
export default ContentControl;
