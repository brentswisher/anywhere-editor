import React from 'react';
import { render } from '@testing-library/react';

import ContentEditor from '../';
it( 'should render sucessfully', () => {
	const { container } = render(
			<ContentEditor
				name="pageContent"
				value="This is an editor instance"
				label="Content:"
				onChange={ ( e ) => null }
			/>
		),
		editor = container.querySelector( 'div.ql-editor' );

	expect( editor ).toContainHTML( 'This is an editor instance' );
} );

it( 'should render the toolbar passed in', () => {
	const { container } = render(
			<ContentEditor
				name="pageContent"
				value="This is an editor instance"
				label="Content:"
				onChange={ ( e ) => null }
				toolbar={ [ [ 'bold' ] ] }
			/>
		),
		toolbar = container.querySelector( 'div.ql-toolbar' );

	expect( toolbar ).toContainElement(
		container.querySelector( 'button.ql-bold' )
	);
	expect( toolbar ).not.toContainElement(
		container.querySelector( 'button.ql-italic' )
	);
} );
