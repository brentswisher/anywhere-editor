import React from 'react';
import { LayoutEditor } from './components/';
import { ContentControl } from './components/Controls/ContentControl';

export function PublicationEditor( { content } ) {
	// const [ image, setImage ] = useState( '' ),
	// [ content ] = useState( [] ),
	// [ error, setError  ] = useState( { errorMessaage: ''} );

	const controls = [
		{
			title: 'Content',
			control: ContentControl,
			displayName: 'Content',
			isMainItem: true,
		},
		// {
		// 	title: 'Aside',
		// 	control: AsideControl,
		// 	displayName: 'Aside',
		// 	isMainItem: true,
		// },
		// {
		// 	title: 'Image',
		// 	control: ImageControl,
		// 	displayName: 'Image',
		// 	isMainItem: true,
		// },
		// {
		// 	title: 'Gallery',
		// 	control: GalleryControl,
		// 	displayName: 'Gallery',
		// 	isMainItem: true,
		// },
		// {
		// 	title: 'Video',
		// 	control: VideoControl,
		// 	displayName: 'Video',
		// 	isMainItem: true,
		// },
		// {
		// 	title: 'AlumniGallery',
		// 	control: AlumniGalleryControl,
		// 	displayName: 'Alumni Photo Gallery',
		// 	isMainItem: false,
		// },
		// {
		// 	title: 'AlumniEvent',
		// 	control: AlumniEventControl,
		// 	displayName: 'Alumni Event List',
		// 	isMainItem: false,
		// },
		// {
		// 	title: 'AlumniFooter',
		// 	control: AlumniFooterControl,
		// 	displayName: 'Alumni Footer',
		// 	isMainItem: false,
		// }
	];

	return <LayoutEditor content={ content } controls={ controls } />;
}

export default PublicationEditor;
