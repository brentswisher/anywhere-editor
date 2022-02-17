import React from 'react';

import { Editor } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import tinymce from 'tinymce/tinymce';

// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

// importing the plugin js.
import 'tinymce/plugins/link';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/paste';

import 'tinymce/plugins/quickbars';

//Style overrides Override
import './index.css';

import { FieldLabel } from '../';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function RichTextInput( {
	label,
	name,
	value,
	toolbar,
	labelHidden,
	helpText,
	onChange,
} ) {
	const cssClasses = useSelector( selectCssClasses ),
		defaultToolbar = [
			'undo redo bold italic | bullist numlist | superscript subscript | removeformat',
		];
	return (
		<React.Fragment>
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ label }
			</FieldLabel>
			<div id="toolbar" style={ { height: '2em' } } />
			<div style={ { padding: '0.5rem', border: '1px solid #757575' } }>
				<Editor
					init={ {
						selector: 'textarea#default',
						menubar: false,
						inline: true,
						skin: false,
						browser_spellcheck: true,
						contextmenu: false,
						toolbar: toolbar || defaultToolbar,
						fixed_toolbar_container: '#toolbar',
						toolbar_persist: true,
						plugins: 'quickbars link autolink lists paste',
						link_context_toolbar: true,
						link_quicklink: true,
						link_title: false,
						link_default_protocol: 'https',
						quickbars_insert_toolbar: false,
						quickbars_selection_toolbar: 'bold italic | quicklink',
						valid_elements: 'p,ul,ol,li,strong,em,sup,sub,a[href]',
					} }
					onEditorChange={ onChange }
					value={ value || '' }
				/>
			</div>
			{ helpText && (
				<span className={ cssClasses[ 'help-text' ] }>
					{ ' ' }
					{ helpText }{ ' ' }
				</span>
			) }
		</React.Fragment>
	);
}
export default RichTextInput;
