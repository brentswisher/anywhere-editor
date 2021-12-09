import React, { useState } from 'react';
import {
	TextInput,
	SelectInput,
	ImageInput,
	RichTextInput,
} from '../../Inputs';
import EditModal from '../../EditModal';

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
		toggleEditable = () => setEditing( ! editing );

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

	let displaySrc = '';
	if ( hasUpload ) {
		//Pass base64 image
		displaySrc = src[ sizes[ sizes.length - 1 ] ];
	} else if ( typeof src === 'string' ) {
		//Pass locaiton in the file system
		displaySrc = `${ thumbnailPath }/${ src }/${
			sizes[ sizes.length - 1 ]
		}.jpg`;
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
			<TextInput
				name="title"
				label="Heading:"
				value={ title }
				onChange={ setTitle }
			/>
		</EditModal>
	);
}
function ImageDisplay( props ) {
	let classString = 'photo';

	if ( props.mobilePosition ) {
		classString += ` photo-mobile-${ props.mobilePosition }`;
	}

	if ( props.border ) {
		classString += ` border-${ props.border }`;
	}

	if ( props.src ) {
		return (
			<div className={ classString } onClick={ props.onClick }>
				<input type="hidden" value={ props.src } name="photoId" />
				<img src={ props.src } alt={ props.alt } />
				<div
					className={ `photo-caption text-${ props.captionPosition }` }
					dangerouslySetInnerHTML={ { __html: props.caption } }
				/>
			</div>
		);
	}
	return (
		<div onClick={ props.onClick }>
			<br />
			<p className="stop-drop-cap">
				[Click here to upload { props.label } ]
			</p>
			<br />
		</div>
	);
}

export default ImageControl;
