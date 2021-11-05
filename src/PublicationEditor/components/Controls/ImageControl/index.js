import React, { useState } from 'react';
import { TextInput, SelectInput, ImageInput } from '../../Inputs';
import EditModal from '../../EditModal';

export function ImageControl( {
	src,
	sizes,
	alt,
	title,
	hasUpload,
	caption,
	captionPosition,
	position,
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
				hasUpload={ hasUpload }
				sizes={ sizes }
				alt={ alt }
				caption={ caption }
				captionPosition={ captionPosition }
				position={ position }
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
			position={ position }
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
	position: 'full',
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
		[ position, setPosition ] = useState( props.position ),
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
					alt,
					caption,
					captionPosition,
					mobilePosition,
					position,
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
			<TextInput
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
				name="photoPosition"
				label="Position"
				value={ position }
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
						value: 'full',
						title: 'Full Width - In Content',
					},
					{
						value: 'offset-left',
						title: 'Offset Left',
					},
					{
						value: 'offset-right',
						title: 'Offset Right',
					},
					{
						value: 'offset-full',
						title: 'Offset Full Width',
					},
					{
						value: 'full-page',
						title: 'Full Page Width',
					},
				] }
				onChange={ setPosition }
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

	if ( props.position ) {
		classString += ` photo-${ props.position }`;
	}

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