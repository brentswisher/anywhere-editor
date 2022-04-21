import React, { useState } from 'react';
import {
	TextInput,
	SelectInput,
	ImageInput,
	RichTextInput,
} from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function ImageControl( {
	src,
	sizes,
	alt,
	title,
	hasUpload,
	caption,
	captionPosition,
	mobilePosition,
	border,
	thumbnailPath,
	setData,
} ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing ),
		displaySrc =
			( thumbnailPath !== '' ? `${ thumbnailPath }/` : '' ) +
			( src[ sizes[ sizes.length - 1 ] ]
				? src[ sizes[ sizes.length - 1 ] ]
				: '' );
	if ( editing ) {
		return (
			<ImageEditor
				setData={ setData }
				src={ src }
				thumbnailPath={ thumbnailPath }
				hasUpload={ hasUpload }
				sizes={ sizes }
				alt={ alt }
				caption={ caption }
				captionPosition={ captionPosition }
				mobilePosition={ mobilePosition }
				border={ border }
				toggleEditable={ toggleEditable }
				title={ title }
			/>
		);
	}
	return (
		<ImageDisplay
			src={ displaySrc }
			alt={ alt }
			title={ title }
			hasUpload={ hasUpload }
			caption={ caption }
			captionPosition={ captionPosition }
			mobilePosition={ mobilePosition }
			border={ border }
			onClick={ toggleEditable }
		/>
	);
}

ImageControl.defaultProps = {
	src: {},
	sizes: [ 500, 770, 1200, 2000 ],
	alt: '',
	title: '',
	thumbnailPath: '',
	hasUpload: false,
	caption: '',
	captionPosition: 'right',
	mobilePosition: 'full',
	border: '',
	editing: false,
};

function ImageEditor( props ) {
	const [ title, setTitle ] = useState( props.title ),
		[ src, setSrc ] = useState( props.src ),
		[ alt, setAlt ] = useState( props.alt ),
		[ caption, setCaption ] = useState( props.caption ),
		[ captionPosition, setCaptionPosition ] = useState(
			props.captionPosition
		),
		[ mobilePosition, setMobilePosition ] = useState(
			props.mobilePosition
		),
		[ border, setBorder ] = useState( props.border ),
		[ hasUpload, setHasUpload ] = useState( props.hasUpload ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( src && ! alt.length ) {
				setError( 'Please enter an alt text to continue' );
			} else {
				props.setData( {
					title,
					src,
					thumbnailPath: props.thumbnailPath,
					alt,
					caption,
					captionPosition,
					mobilePosition,
					border,
					hasUpload,
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
				name="title"
				label="Heading:"
				value={ title }
				onChange={ setTitle }
			/>
			<ImageInput
				name="image"
				label="Image"
				src={ src }
				sizes={ props.sizes }
				thumbnailPath={ props.thumbnailPath }
				uploadCallback={ setHasUpload }
				onChange={ setSrc }
				setError={ setError }
			/>
			<TextInput
				name="alt"
				label="Alt Text:"
				value={ alt }
				onChange={ setAlt }
			/>
			<RichTextInput
				name="caption"
				label="Caption:"
				value={ caption }
				onChange={ setCaption }
			/>
			<SelectInput
				name="captionPosition"
				label="Caption Alignment"
				value={ captionPosition }
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
				onChange={ setCaptionPosition }
			/>
			<SelectInput
				name="mobilePosition"
				label="Mobile Position"
				value={ mobilePosition }
				options={ [
					{
						value: 'full',
						title: 'Full Screen',
					},
					{
						value: 'match',
						title: 'Match Desktop Position',
					},
				] }
				onChange={ setMobilePosition }
			/>
			<SelectInput
				name="photoBorder"
				label="Border"
				value={ border }
				options={ [
					{
						value: '',
						title: 'None',
					},
					{
						value: 'top',
						title: 'Top',
					},
					{
						value: 'bottom',
						title: 'Bottom',
					},
					{
						value: 'both',
						title: 'Top and Bottom',
					},
				] }
				onChange={ setBorder }
			/>
		</EditModal>
	);
}
function ImageDisplay( props ) {
	const cssClasses = useSelector( selectCssClasses ),
		classList = [ cssClasses[ 'photo' ] ];

	if ( props.mobilePosition ) {
		classList.push(
			cssClasses[ `photo-mobile-${ props.mobilePosition }` ]
		);
	}

	if ( props.border ) {
		// classString += ` border-${ props.border }`;
		classList.push( cssClasses[ `border-${ props.border }` ] );
	}
	if ( props.src ) {
		return (
			<div className={ classList.join( ' ' ) } onClick={ props.onClick }>
				<input type="hidden" value={ props.src } name="photoId" />
				{ props.title && (
					<h2 className={ cssClasses[ 'content-heading' ] }>
						{ props.title }
					</h2>
				) }
				<img src={ props.src } alt={ props.alt } />
				<div
					className={ `${ cssClasses[ 'photo-caption' ] }  ${
						cssClasses[ 'text-' + props.captionPosition ]
					}` }
					dangerouslySetInnerHTML={ { __html: props.caption } }
				/>
			</div>
		);
	}
	return (
		<div onClick={ props.onClick }>
			<br />
			<p style={ { textAlign: 'center' } }>
				[Click here to upload image ]
			</p>
			<br />
		</div>
	);
}

export default ImageControl;
