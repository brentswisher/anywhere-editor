/* eslint-disable */
import React, { useState } from 'react';
import {
	TextInput,
	SelectInput,
	ImageInput,
	RichTextInput,
} from '../../Inputs';
import EditModal from '../../EditModal';

export function GalleryControl( {
	images,
	title,
	caption,
	captionPosition,
	headingPosition,
	position,
	thumbnailPath,
	setData,
} ) {
	const maxImages = 3,
		[ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<GalleryEditor
				images={ images }
				maxImages={ maxImages }
				title={ title }
				caption={ caption }
				captionPosition={ captionPosition }
				headingPosition={ headingPosition }
				position={ position }
				setData={ setData }
				toggleEditable={ toggleEditable }
			/>
		);
	}
	return (
		<GalleryDisplay
			images={ images }
			title={ title }
			caption={ caption }
			captionPosition={ captionPosition }
			headingPosition={ headingPosition }
			position={ position }
			setData={ setData }
			onClick={ toggleEditable }
		/>
	);
}

GalleryControl.defaultProps = {
	images: [
		{
			src: {},
			sizes: [ 500, 770, 1200, 2000 ],
			alt: '',
			hasUpload: false,
			caption: '',
		},
	],
	title: '',
	caption: '',
	position: 'full',
	captionPosition: 'right',
	headingPosition: 'left',
	editing: false,
};
function GalleryEditor( props ) {
	const [ images, setImages ] = useState( props.images ),
		[ title, setTitle ] = useState( props.title ),
		[ caption, setCaption ] = useState( props.caption ),
		[ captionPosition, setCaptionPosition ] = useState(
			props.captionPosition
		),
		[ headingPosition, setHeadingPosition ] = useState(
			props.headingPosition
		),
		[ position, setPosition ] = useState( props.position ),
		[ currentTab, setCurrentTab ] = useState( 0 ),
		[ error, setError ] = useState( '' ),
		changeOneImage = ( title, value ) => {
			// Can't just slice this at the array has complex data types that would get passed by reference
			const imagesToUpdate = JSON.parse( JSON.stringify( images ) );
			imagesToUpdate[ currentTab ][ title ] = value;
			setImages( imagesToUpdate );
		},
		addImage = () => {
			const imagesToUpdate = JSON.parse( JSON.stringify( images ) );
			if ( imagesToUpdate.length < props.maxImages ) {
				imagesToUpdate.push( {
					src: {},
					sizes: [ 500, 770, 1200, 2000 ],
					alt: '',
					hasUpload: false,
					caption: '',
				} );
				setImages( imagesToUpdate );
			} else {
				setError(
					`You may currently only add up to  ${ props.maxImages } images to a gallery`
				);
			}
		},
		removeImage = () => {
			const imagesToUpdate = JSON.parse( JSON.stringify( images ) );
			if ( images.length === 1 ) {
				setError( 'You must have at least one image in a gallery' );
			} else {
				imagesToUpdate.splice( currentTab, 1 );
				setImages( imagesToUpdate );
				setCurrentTab( Math.max( 0, currentTab - 1 ) );
			}
		},
		saveChanges = ( e ) => {
			e.preventDefault();

			// Validation
			let counter = 0,
				errorFound = false; // We can't just check errorMessage because if may not have been updated yet
			for ( const image of images ) {
				console.log( image );
				if ( ! Object.keys( image.src ).length ) {
					setError(
						`Please upload a the photo for image ${
							counter + 1
						} or remove it to continue`
					);
					setCurrentTab( counter );
					errorFound = true;
					break;
				} else if ( ! image.alt.length ) {
					setError(
						`Please enter the photo alt text for image ${
							counter + 1
						} to continue`
					);
					setCurrentTab( counter );
					errorFound = true;
					break;
				}
				counter++;
			}
			if ( ! errorFound ) {
				props.setData( {
					images,
					thumbnailPath: props.thumbnailPath,
					title,
					caption,
					captionPosition,
					headingPosition,
					position,
				} );
				setError( '' );
				props.toggleEditable();
			}
		},
		cancelChanges = () => props.toggleEditable();

	return (
		<EditModal
			cancelChanges={ cancelChanges }
			saveChanges={ saveChanges }
			error={ error }
		>
			<TextInput
				name="GalleryTitle"
				label="Heading"
				autoFocus={ true }
				value={ title }
				onChange={ setTitle }
			/>
			<SelectInput
				name="headingPosition"
				label="Heading Alignment"
				value={ headingPosition }
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
				onChange={ setHeadingPosition }
			/>
			<SelectInput
				name="galleryPosition"
				label="Gallery Style"
				value={ position }
				options={ [
					{
						value: 'full',
						title: 'Normal Full Width',
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
			<RichTextInput
				name="GalleryCaption"
				label="Caption For Gallery"
				autoFocus={ true }
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
			<ul className="tabs">
				{ images.map( ( image, index ) => (
					<li
						key={ index }
						className={
							'tabs-title' +
							( index === currentTab ? ' is-active' : '' )
						}
					>
						<a
							href="#panel1"
							onClick={ () => setCurrentTab( index ) }
						>
							Image { index + 1 }
						</a>
					</li>
				) ) }
			</ul>

			<div className="tabs-content">
				{ images.map( ( image, index ) => (
					<div
						className={
							'tabs-panel' +
							( index === currentTab ? ' is-active' : '' )
						}
						key={ index }
					>
						<ImageInput
							name={ `image_${ index }` }
							label={ `Image_${ index }` }
							src={ images[ index ].src }
							sizes={ images[ index ].sizes }
							thumbnailPath={ props.thumbnailPath }
							uploadCallback={ setHasUpload }
							onChange={ changeOneImage }
							setError={ setError }
						/>
						<button onClick={ addImage } className="button success">
							Add Image
						</button>
						<button
							onClick={ removeImage }
							className="button alert"
						>
							Remove Image
						</button>
					</div>
				) ) }
			</div>
		</EditModal>
	);
}

function GalleryDisplay( props ) {
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

export default GalleryControl;
