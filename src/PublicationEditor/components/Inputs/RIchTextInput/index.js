import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { FieldLabel } from '../';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function RichTextInput( {
	label,
	name,
	value,
	formats,
	labelHidden,
	helpText,
	onChange,
} ) {
	const cssClasses = useSelector( selectCssClasses ),
		defaultFormats = [ 'bold', 'italic', 'list', 'bullet', 'link' ];
	return (
		<React.Fragment>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<CustomToolbar name={ name } />
			<ReactQuill
				value={ value || '' }
				onChange={ onChange }
				modules={ { toolbar: `#${ name }Toolbar` } }
				formats={ formats || defaultFormats }
				theme="snow"
			/>
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</React.Fragment>
	);
}

function CustomToolbar( { name } ) {
	return (
		<div id={ `${ name }Toolbar` }>
			<span className="ql-formats">
				<button className="ql-bold" aria-label="Bold"></button>
				<button className="ql-italic" aria-label="Italics"></button>
			</span>
			<span className="ql-formats">
				<button
					className="ql-list"
					value="ordered"
					aria-label="Ordered List"
				></button>
				<button
					className="ql-list"
					value="bullet"
					aria-label="Bulleted List"
				></button>
			</span>
			<span className="ql-formats">
				<button
					className="ql-link"
					type="button"
					aria-label="Link"
				></button>
			</span>
			<span className="ql-formats">
				<button
					className="ql-clean"
					type="button"
					aria-label="Clear Formatting"
				></button>
			</span>
		</div>
	);
}
export default RichTextInput;
