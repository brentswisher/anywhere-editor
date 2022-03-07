import React, { useState } from 'react';
import { TextInput, SelectInput, RichTextInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function ContentControl( {
	name,
	title,
	content,
	textAlign,
	setData,
	required,
} ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<ContentEditor
				title={ title }
				content={ content }
				textAlign={ textAlign }
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
			onClick={ toggleEditable }
		/>
	);
}

ContentControl.defaultProps = {
	title: '',
	content: '',
	textAlign: 'left',
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
				fieldName="contentTitle"
				fieldLabel="Heading"
				autoFocus={ true }
				value={ title }
				onChange={ setTitle }
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
			<RichTextInput
				name="contentContent"
				label="Content"
				modules={ modules }
				value={ content }
				onChange={ setContent }
			/>
		</EditModal>
	);
}

function ContentDisplay( props ) {
	const cssClasses = useSelector( selectCssClasses );
	return (
		<div onClick={ props.onClick }>
			{ props.title && (
				<h2 className={ cssClasses[ 'content-heading' ] }>
					{ props.title }
				</h2>
			) }
			<div
				className={
					cssClasses[ 'content-body' ] +
					' ' +
					cssClasses[ `text-align-${ props.textAlign }` ]
				}
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
