/* eslint-disable */
import React, { useState, useReducer } from 'react';
import {
	TextInput,
	SelectInput,
	ImageInput,
	RichTextInput,
} from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

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
			thumbnailPath={ thumbnailPath }
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
	thumbnailPath: '',
	title: '',
	caption: '',
	captionPosition: 'right',
	headingPosition: 'left',
	editing: false,
};
function GalleryEditor( props ) {
	const cssClasses = useSelector( selectCssClasses ),
		[ title, setTitle ] = useState( props.title ),
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
			<ul className={ cssClasses[ 'tab-group' ] }>
				{ images.map( ( image, index ) => (
					<li
						key={ index }
						className={
							index === currentTab
								? cssClasses[ 'tab-title-active' ]
								: cssClasses[ 'tab-title' ]
						}
					>
						<a
							href={ `#panel${ index }` }
							aria-selected={ index === currentTab }
							className={ cssClasses[ 'tab-title-link' ] }
							onClick={ () => setCurrentTab( index ) }
						>
							Image { index + 1 }
						</a>
					</li>
				) ) }
			</ul>

			<div className={ cssClasses[ 'tab-content' ] }>
				{ images.map( ( image, index ) => (
					<div
						className={
							index === currentTab
								? cssClasses[ 'tab-panel-active' ]
								: cssClasses[ 'tab-panel' ]
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
						<button
							onClick={ addImage }
							className={ cssClasses[ 'button-success' ] }
						>
							Add Image
						</button>
						<button
							onClick={ () =>
								dispatchImage( {
									type: 'remove',
									index: currentTab,
								} )
							}
							className={ cssClasses[ 'button-alert' ] }
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
	const cssClasses = useSelector( selectCssClasses );
	if ( props.images.length && Object.keys( props.images[ 0 ].src ).length ) {
		return (
			<div
				className={ cssClasses[ 'gallery' ] }
				onClick={ props.onClick }
			>
				{ props.title && (
					<h2
						className={
							cssClasses[ `text-${ props.headingPosition }` ]
						}
					>
						{ ' ' }
						{ props.title }{ ' ' }
					</h2>
				) }
				<div className={ cssClasses[ 'gallery-items' ] }>
					{ props.images.map( ( image, index ) => {
						const displaySrc =
							( props.thumbnailPath !== ''
								? `${ props.thumbnailPath }/`
								: '' ) +
							image.src[ image.sizes[ image.sizes.length - 1 ] ];
						return (
							<div
								className={ cssClasses[ 'gallery-item' ] }
								key={ index }
							>
								<img src={ displaySrc } alt={ image.alt } />
								{ image.caption && (
									<div
										className={ `${
											cssClasses[ 'gallery-item' ]
										} ${
											cssClasses[
												'text-' + props.captionPosition
											]
										}` }
										dangerouslySetInnerHTML={ {
											__html: image.caption,
										} }
									/>
								) }
							</div>
						);
					} ) }
				</div>
				{ props.caption && props.caption.length && (
					<div
						className={ `${ cssClasses[ 'gallery-item' ] } ${
							cssClasses[ 'text-' + props.captionPosition ]
						}` }
						dangerouslySetInnerHTML={ { __html: props.caption } }
					/>
				) }
			</div>
		);
	}
	return (
		<div
			style={ { padding: '1em 0', textAlign: 'center' } }
			onClick={ props.onClick }
		>
			<p>[Click here to upload images to the gallery]</p>
		</div>
	);
}

export default GalleryControl;
