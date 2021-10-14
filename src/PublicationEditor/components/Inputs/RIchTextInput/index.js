import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function RichTextInput( { label, value, toolbar, formats, onChange } ) {
	const defaultToolbar = [
			[ 'bold', 'italic' ],
			[ { list: 'ordered' }, { list: 'bullet' } ],
			[ 'link' ],
			[ 'clean' ],
		],
		//Formats are which html elements to allow in the editor
		defaultFormats = [ 'bold', 'italic', 'list', 'bullet', 'link' ],
		modules = {
			toolbar: toolbar || defaultToolbar,
		};
	return (
		<React.Fragment>
			{ label && <strong>{ label }</strong> }
			<ReactQuill
				value={ value || '' }
				onChange={ onChange }
				modules={ modules }
				formats={ formats || defaultFormats }
				theme="snow"
			/>
		</React.Fragment>
	);
}

export default RichTextInput;
