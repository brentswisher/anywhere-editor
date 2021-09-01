// import React from 'react';
// import { TextInput, ContentEditor } from '../index.js';
// export default function ImageInput( props ) {
// 	const fileRef = React.createRef(),
// 		resizeImage = function ( image, width, quality ) {
// 			const canvas = document.createElement( 'canvas' ),
// 				context = canvas.getContext( '2d' ),
// 				newWidth = width || image.naturalWidth,
// 				newHeight =
// 					( newWidth / image.naturalWidth ) * image.naturalHeight,
// 				stepToWidth = function ( input, width ) {
// 					const steps = Math.ceil(
// 							Math.log( input.width / width ) / Math.log( 2 )
// 						),
// 						getResizedCanvas = function ( image ) {
// 							const canvas = document.createElement( 'canvas' ),
// 								context = canvas.getContext( '2d' );
// 							canvas.width = image.width / 2;
// 							canvas.height = image.height / 2;
// 							context.drawImage(
// 								image,
// 								0,
// 								0,
// 								canvas.width,
// 								canvas.height
// 							);
// 							return canvas;
// 						};
// 					for ( let i = 0; i < steps - 1; i++ ) {
// 						input = getResizedCanvas( input );
// 					}

// 					return input;
// 				},
// 				element = stepToWidth( image, width );
// 			canvas.width = newWidth;
// 			canvas.height = newHeight;

// 			// fill the background in white
// 			context.fillStyle = '#FFF';
// 			context.fillRect( 0, 0, canvas.width, canvas.height );
// 			context.drawImage(
// 				element,
// 				-Math.floor( ( newWidth - canvas.width ) / 2 ),
// 				-Math.floor( ( newHeight - canvas.height ) / ( 3 * 1.618 ) ),
// 				newWidth,
// 				newHeight
// 			);

// 			return canvas.toDataURL( 'image/jpeg', quality / 100 );
// 		},
// 		saveFile = function ( e ) {
// 			const file = e.target.files[ 0 ],
// 				maxImageSize = 300000, //Max size is 300K
// 				//Set the quality based on the file size constrained between 15 and 100
// 				quality = Math.min(
// 					85,
// 					Math.max(
// 						20,
// 						parseInt( ( maxImageSize / file.size ) * 100 )
// 					)
// 				);
// 			let fileSaved = true;
// 			props.setError( '' );

// 			// Only process image files.
// 			if ( ! file.type.match( 'image.*' ) ) {
// 				props.setError(
// 					'The file you tried to upload is an invalid file type, please upload a different image'
// 				);
// 				fileSaved = false;
// 			}

// 			if ( fileSaved ) {
// 				const reader = new FileReader();

// 				// So this seems confusing, but we are checking reading the file in with a FileReader, then in that readers onload, creating an "imaginary"
// 				// image and setting it's source to the value of the file. Then in the images onload, which will trigger after we set the src to the File Reader output
// 				// we can check it's width to see if it is wide enough, and if it is, update the component state.
// 				reader.onload = ( loadEvent ) => {
// 					props.setError( '' );
// 					const img = document.createElement( 'img' );
// 					img.onload = ( evt ) => {
// 						const minWidth = 1000;
// 						//Check that it is wide enough before updating
// 						if ( evt.target.width < minWidth ) {
// 							props.setError(
// 								`This image is not wide enough, please upload an image that is at least ${ minWidth } px wide.`
// 							);
// 							fileRef.current.value = '';
// 						} else {
// 							const newSrc = {};
// 							props.sizes.map( ( size ) => {
// 								if (
// 									evt.target.naturalWidth === size &&
// 									file.size <= maxImageSize * 1.1
// 								) {
// 									// If what they upload matches a needed size and is close to the file size limit, just save it
// 									newSrc[ size ] = evt.target.src;
// 								} else {
// 									newSrc[ size ] = resizeImage(
// 										evt.target,
// 										size,
// 										quality
// 									);
// 								}
// 							} );
// 							props.onChange( 'src', newSrc );
// 							props.onChange( 'hasUpload', true );
// 						}
// 					};
// 					img.src = loadEvent.target.result;
// 				};
// 				reader.readAsDataURL( e.target.files[ 0 ] );
// 			} else {
// 				fileRef.current.value = '';
// 				props.onChange( 'hasUpload', false );
// 				// Don't don't want to update the src via props.onChange('src','') as that will override the existing image is a bad file was attempted
// 			}
// 		};

// 	let thumbnailSrc = '';
// 	if ( typeof props.src === 'string' ) {
// 		thumbnailSrc = `${ props.thumbnailPath }/${ props.src }/500.jpg`;
// 	} else if ( Object.keys( props.src ).length ) {
// 		thumbnailSrc = props.src[ 500 ];
// 	}

// 	return (
// 		<fieldset>
// 			<legend>Image Upload</legend>
// 			{ thumbnailSrc && (
// 				<img src={ thumbnailSrc } style={ { width: '150px' } } />
// 			) }
// 			<label htmlFor="photo">
// 				{ props.src ? 'Replace Image' : 'Upload Image' }:
// 			</label>
// 			<input
// 				type="file"
// 				id="photo"
// 				onChange={ saveFile }
// 				autoFocus={ true }
// 				ref={ fileRef }
// 			/>
// 			<TextInput
// 				fieldName="photoAlt"
// 				fieldLabel="Photo Alt Text"
// 				value={ props.alt }
// 				onChange={ ( e ) => props.onChange( 'alt', e ) }
// 			/>
// 			{ typeof props.caption === 'string' && (
// 				<ContentEditor
// 					fieldName="photoCaption"
// 					fieldLabel="Photo Caption"
// 					value={ props.caption }
// 					onChange={ ( e ) => props.onChange( 'caption', e ) }
// 				/>
// 			) }
// 		</fieldset>
// 	);
// }
