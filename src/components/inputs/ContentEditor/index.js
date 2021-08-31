import React from 'react';
import ReactQuill from 'react-quill';

export default function ContentEditor( props ) {
	const modules = {
			toolbar: [
				[ 'bold', 'italic' ],
				[ { list: 'ordered' }, { list: 'bullet' } ],
				[ 'link' ],
				[ 'clean' ],
			],
		},
		//Which elements to allow in the editor
		formats = [
			'bold',
			'italic',
			'list',
			'bullet',
			'link',
		]
	;
	return (
		<React.Fragment>
			{ props.fieldLabel &&
				<strong>
					{ props.fieldLabel }
				</strong>
			}
			<ReactQuill
				value={ props.value || '' }
				onChange={ ( e ) => props.onChange( e ) }
				modules={ modules }
				formats={ formats }
			/>
		</React.Fragment>
	);
}
