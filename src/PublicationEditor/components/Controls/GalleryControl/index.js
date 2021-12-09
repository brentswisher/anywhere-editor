/* eslint-disable */
import React, { useState, useReducer } from 'react';
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
	captionPosition: 'right',
	headingPosition: 'left',
	editing: false,
};
function GalleryEditor( props ) {
	const [ title, setTitle ] = useState( props.title ),
		[ caption, setCaption ] = useState( props.caption ),
		[ captionPosition, setCaptionPosition ] = useState(
			props.captionPosition
		),
		[ headingPosition, setHeadingPosition ] = useState(
			props.headingPosition
		),
		[ currentTab, setCurrentTab ] = useState( 0 ),
		[ error, setError ] = useState( '' ),
		imageReducer = ( state, action ) => {
			switch ( action.type ) {
				case 'add':
					return [ ...state, action.image ];
				case 'remove':
					return state.filter(
						( images, index ) => index != action.index
					);
				case 'updateSrc':
					return state.map( ( image, index ) =>
						index === action.index
							? { ...image, src: action.value, hasUpload: true }
							: image
					);
				case 'updateAlt':
					return state.map( ( image, index ) =>
						index === action.index
							? { ...image, alt: action.value }
							: image
					);
				case 'updateCaption':
					return state.map( ( image, index ) =>
						index === action.index
							? { ...image, caption: action.value }
							: image
					);
				default:
					return state;
			}
		},
		[ images, dispatchImage ] = useReducer( imageReducer, props.images ),
		addImage = () => {
			if ( images.length < props.maxImages ) {
				dispatchImage( {
					type: 'add',
					image: {
						src: {},
						sizes: [ 500, 770, 1200, 2000 ],
						alt: '',
						hasUpload: false,
						caption: '',
					},
				} );
			} else {
				setError(
					`You may currently only add up to  ${ props.maxImages } images to a gallery`
				);
			}
		},
		saveChanges = ( e ) => {
			e.preventDefault();

			// Validation
			let counter = 0,
				errorFound = false; // We can't just check errorMessage because if may not have been updated yet
			for ( const image of images ) {
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
							name={ `image_${ index + 1 }` }
							label={ `Image_${ index + 1 }` }
							src={ images[ index ].src }
							sizes={ images[ index ].sizes }
							thumbnailPath={ props.thumbnailPath }
							onChange={ ( e ) =>
								dispatchImage( {
									type: 'updateSrc',
									index: currentTab,
									value: e,
								} )
							}
							setError={ setError }
						/>
						<TextInput
							name={ `image_${ index + 1 }_alt` }
							label={ `Image ${ index + 1 } Alt Text` }
							value={ images[ index ].alt }
							onChange={ ( e ) =>
								dispatchImage( {
									type: 'updateAlt',
									index: currentTab,
									value: e,
								} )
							}
						/>
						<TextInput
							name={ `image_${ index + 1 }_caption` }
							label={ `Image ${ index + 1 } Caption` }
							value={ images[ index ].caption }
							onChange={ ( e ) =>
								dispatchImage( {
									type: 'updateCaption',
									index: currentTab,
									value: e,
								} )
							}
						/>
						<button onClick={ addImage } className="button success">
							Add Image
						</button>
						<button
							onClick={ () =>
								dispatchImage( {
									type: 'remove',
									index: currentTab,
								} )
							}
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
	return (
		<div className="gallery" onClick={ props.onClick }>
			{ props.title && (
				<h2 className={ `text-${ props.headingPosition }` }>
					{ ' ' }
					{ props.title }{ ' ' }
				</h2>
			) }
			<div className="gallery-items">
				{ props.images.length &&
				Object.keys( props.images[ 0 ].src ).length ? (
					props.images.map( ( image, index ) => {
						let displaySrc = '';
						if ( image.hasUpload ) {
							//Pass base64 image
							displaySrc =
								image.src[
									image.sizes[ image.sizes.length - 1 ]
								];
						} else if ( typeof image.src === 'string' ) {
							//Pass locaiton in the file system
							displaySrc = `${ thumbnailPath }/${ image.src }/${
								image.sizes[ image.sizes.length - 1 ]
							}.jpg`;
						}
						return (
							<div className="gallery-item" key={ index }>
								<img src={ displaySrc } alt={ image.alt } />
								{ image.caption && (
									<div
										className={ `gallery-caption text-${ props.captionPosition }` }
										dangerouslySetInnerHTML={ {
											__html: image.caption,
										} }
									/>
								) }
							</div>
						);
					} )
				) : (
					<p style={ { margin: '1em 0' } }>
						[Click here to upload images to the gallery]
					</p>
				) }
			</div>
			{ props.caption && props.caption.length && (
				<div
					className={ `gallery-caption text-${ props.captionPosition }` }
					dangerouslySetInnerHTML={ { __html: props.caption } }
				/>
			) }
		</div>
	);
}

export default GalleryControl;
