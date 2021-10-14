import React, { useState } from 'react';
import { TextInput, RichTextInput } from '../../Inputs';
import EditModal from '../../EditModal';

export function ContentControl( { name, title, content, setData, required } ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<ContentEditor
				title={ title }
				content={ content }
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
			onClick={ toggleEditable }
		/>
	);
}

ContentControl.defaultProps = {
	title: '',
	content: '',
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
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! content.length ) {
				setError( 'Please enter some content to continue' );
			} else {
				props.setData( {
					title,
					content,
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
				fieldName="ContentTitle"
				fieldLabel="Heading"
				autoFocus={ true }
				value={ title }
				onChange={ setTitle }
			/>
			<RichTextInput
				name="ContentContent"
				label="Content"
				modules={ modules }
				value={ content }
				onChange={ setContent }
			/>
		</EditModal>
	);
}

function ContentDisplay( props ) {
	return (
		<div className="grid-x" onClick={ props.onClick }>
			<div className="article-content small-6 small-offset-3 cell">
				{ props.title && (
					<h2 className="article-content-header">
						{ ' ' }
						{ props.title }{ ' ' }
					</h2>
				) }
				<div
					dangerouslySetInnerHTML={ {
						__html: props.content
							? props.content
							: '<br /><p style="text-align:center;" class="stop-drop-cap">[Enter Content Here]</p><br />',
					} }
				></div>
			</div>
		</div>
	);
}
export default ContentControl;
