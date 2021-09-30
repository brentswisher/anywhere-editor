// import React from 'react';
// import { TextInput, RichTextInput } from '../Inputs';
// import EditModal from '../EditModal.js';

// export function ContentControl ( { editing, updateField, title, content, fieldName } ) {
// 	toggleEditable = () =>{
// 		updateField( 'editing', ! editing );
// 	}
// 	if ( editing ) {
// 		return (
// 			<ContentEditor
// 				title={ title }
// 				content={ content }
// 				onChange={ updateField }
// 				toggleEditable={ this.toggleEditable }
// 				fieldName={ fieldName }
// 			/>
// 		);
// 	}
// 	return (
// 		<ContentDisplay
// 			title={ title }
// 			content={ content }
// 			onClick={ this.toggleEditable }
// 		/>
// 	);
// }

// ContentControl.defaultProps = {
// 	title: '',
// 	content: '',
// 	editing: false,
// };

// function ContentEditor ( props ){
// 	constructor( props ) {
// 		super( props );
// 		this.state = {
// 			initialState: this.props,
// 		};
// 		this.saveChanges = this.saveChanges.bind( this );
// 		this.cancelChanges = this.cancelChanges.bind( this );
// 		this.modules = {
// 			toolbar: [
// 				[ 'bold', 'italic' ],
// 				[ { list: 'ordered' }, { list: 'bullet' } ],
// 				[ 'link' ],
// 				[ 'clean' ],
// 			],
// 		};
// 	}

// 	saveChanges() {
// 		toggleEditable();
// 	}

// 	cancelChanges() {
// 		onChange( 'title', this.state.initialState.title );
// 		onChange( 'content', this.state.initialState.content );
// 		toggleEditable();
// 	}

// 	return (
// 		<EditModal
// 			saveChanges={ this.saveChanges }
// 			cancelChanges={ this.cancelChanges }
// 		>
// 			<TextInput
// 				fieldName="ContentTitle"
// 				fieldLabel="Heading"
// 				autoFocus={ true }
// 				value={ title }
// 				onChange={ ( e ) => onChange( 'title', e ) }
// 			/>
// 			<RichTextInput
// 				fieldName="ContentContent"
// 				fieldLabel="Content"
// 				value={ content }
// 				onChange={ ( e ) => onChange( 'content', e ) }
// 			/>
// 		</EditModal>
// 	);
// }

// function ContentDisplay( props ) {
// 	return (
// 		<div className="grid-x" onClick={ props.onClick }>
// 			<div className="article-content small-6 small-offset-3 cell">
// 				{ props.title && (
// 					<h2 className="article-content-header">
// 						{ ' ' }
// 						{ props.title }{ ' ' }
// 					</h2>
// 				) }
// 				<div
// 					dangerouslySetInnerHTML={ {
// 						__html: props.content
// 							? props.content
// 							: '<br /><p style="text-align:center;" class="stop-drop-cap">[Enter Content Here]</p><br />',
// 					} }
// 				></div>
// 			</div>
// 		</div>
// 	);
// }
// export default ContentControl;
