import React from 'react';
import { FieldLabel } from '../';

export function ImageInput( {
	name,
	label,
	helpText,
	labelHidden,
	setError,
	sizes,
	maxFileSize,
	onChange,
	src,
	thumbnailPath,
	uploadCallback,
} ) {
	const fileRef = React.createRef(),
		resizeImage = function ( image, width, quality ) {
			const canvas = document.createElement( 'canvas' ),
				context = canvas.getContext( '2d' ),
				newWidth = width || image.naturalWidth,
				newHeight =
					( newWidth / image.naturalWidth ) * image.naturalHeight,
				stepToWidth = function ( input, width ) {
					const steps = Math.ceil(
							Math.log( input.width / width ) / Math.log( 2 )
						),
						getResizedCanvas = function ( image ) {
							const canvas = document.createElement( 'canvas' ),
								context = canvas.getContext( '2d' );
							canvas.width = image.width / 2;
							canvas.height = image.height / 2;
							context.drawImage(
								image,
								0,
								0,
								canvas.width,
								canvas.height
							);
							return canvas;
						};
					for ( let i = 0; i < steps - 1; i++ ) {
						input = getResizedCanvas( input );
					}

					return input;
				},
				element = stepToWidth( image, width );
			canvas.width = newWidth;
			canvas.height = newHeight;

			// fill the background in white
			context.fillStyle = '#FFF';
			context.fillRect( 0, 0, canvas.width, canvas.height );
			context.drawImage(
				element,
				-Math.floor( ( newWidth - canvas.width ) / 2 ),
				-Math.floor( ( newHeight - canvas.height ) / ( 3 * 1.618 ) ),
				newWidth,
				newHeight
			);

			return canvas.toDataURL( 'image/jpeg', quality / 100 );
		},
		saveFile = function ( e ) {
			// Verify upload wasn't cancelled
			if ( ! e.target.files[ 0 ] ) {
				return;
			}
			const file = e.target.files[ 0 ],
				//Set the quality based on the file size constrained between 15 and 100
				quality = Math.min(
					85,
					Math.max(
						20,
						parseInt( ( maxFileSize / file.size ) * 100 )
					)
				);
			let fileSaved = true;
			setError( '' );

			// Only process image files.
			if ( ! file.type.match( 'image.*' ) ) {
				setError(
					'The file you tried to upload is an invalid file type, please upload a different image'
				);
				fileSaved = false;
			}

			if ( fileSaved ) {
				const reader = new FileReader();

				// So this seems confusing, but we are checking reading the file in with a FileReader, then in that readers onload, creating an "imaginary"
				// image and setting it's source to the value of the file. Then in the images onload, which will trigger after we set the src to the File Reader output
				// we can check it's width to see if it is wide enough, and if it is, update the component state.
				reader.onload = ( loadEvent ) => {
					setError( '' );
					const img = document.createElement( 'img' );
					img.onload = ( evt ) => {
						const newSrc = {};
						if (
							evt.target.width <
							sizes[ Math.floor( ( sizes.length - 1 ) / 2 ) ]
						) {
							setError(
								`Warning, the image you uploaded is quite narrow and may become pixelated when displayed, please upload an image that is at least ${
									sizes[
										Math.floor( ( sizes.length - 1 ) / 2 )
									]
								} px wide.`
							);
							//TODO: the new file name is still displayed in the input field
							// fileRef.current.value = '';
						}

						sizes.forEach( ( size ) => {
							if (
								evt.target.naturalWidth === size &&
								file.size <= maxFileSize
							) {
								// If what they upload matches a needed size and is under the file size limit, just save it
								newSrc[ size ] = evt.target.src;
							} else {
								newSrc[ size ] = resizeImage(
									evt.target,
									size,
									quality
								);
							}
						} );
						onChange( newSrc );

						//trigger upload callback if a new upload was processed
						if ( typeof uploadCallback === 'function' ) {
							uploadCallback( true );
						}
					};
					img.src = loadEvent.target.result;
				};
				reader.readAsDataURL( e.target.files[ 0 ] );
			} else {
				fileRef.current.value = '';
				// onChange( 'hasUpload', false );
				// Don't don't want to update the src via onChange('src','') as that will override the existing image is a bad file was attempted
			}
		};

	let thumbnailSrc = '';
	if ( typeof src === 'string' && src.length ) {
		//Previously uploaded image, saved to storage
		thumbnailSrc = `${ thumbnailPath }/${ src }/${
			sizes[ sizes.length - 1 ]
		}.jpg`;
	} else if ( Object.keys( src ).length ) {
		// Image uploaded in this editing session, not saved to storage yet
		thumbnailSrc = src[ sizes[ 0 ] ];
	}

	return (
		<div>
			{ thumbnailSrc && (
				<img
					src={ thumbnailSrc }
					alt={ `Thumbnail preview of upload for ${ label }` }
					style={ { width: '150px' } }
				/>
			) }
			<FieldLabel htmlFor={ name } visuallyHidden={ labelHidden }>
				{ src ? `Replace ${ label }` : `Upload ${ label }` }
			</FieldLabel>
			<input
				type="file"
				id={ name }
				onChange={ saveFile }
				ref={ fileRef }
			/>
			{ helpText && <span className="help-text"> { helpText } </span> }
		</div>
	);
}
ImageInput.defaultProps = {
	src: '',
	sizes: [ 500, 1000, 1200, 1500 ],
	thumbnailPath: '',
	maxFileSize: 300000,
};

export default ImageInput;
