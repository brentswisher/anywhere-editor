import React, { useState } from 'react';
import { TextInput } from '../../Inputs';
import EditModal from '../../EditModal';

export function VideoControl( { name, videoId, title, setData, required } ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<VideoEditor
				videoId={ videoId }
				title={ title }
				name={ name }
				setData={ setData }
				toggleEditable={ toggleEditable }
			/>
		);
	}
	return (
		<VideoDisplay
			videoId={ videoId }
			title={ title }
			name={ name }
			onClick={ () => toggleEditable() }
		/>
	);
}

VideoControl.defaultProps = {
	videoId: '',
	title: '',
	editing: false,
};

function VideoEditor( props ) {
	const [ title, setTitle ] = useState( props.title ),
		[ videoId, setVideoId ] = useState( props.videoId ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( videoId.length && ! title.length ) {
				setError( 'Please enter the video title text to continue' );
			} else {
				props.setData( {
					videoId,
					title,
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
				name="videoId"
				label="YouTube VideoId"
				autoFocus={ true }
				value={ videoId }
				onChange={ setVideoId }
			/>
			<TextInput
				name="title"
				label="Video Title (For Screen Readers)"
				value={ title }
				onChange={ setTitle }
			/>
		</EditModal>
	);
}

function VideoDisplay( props ) {
	if ( props.videoId ) {
		return (
			<div
				className="responsive-embed widescreen"
				onClick={ props.onClick }
			>
				<img
					src={ `https://img.youtube.com/vi/${ props.videoId }/0.jpg` }
					alt={ props.title }
					style={ { width: '100%' } }
				/>
			</div>
		);
	}
	return (
		<div onClick={ props.onClick }>
			<br />
			<p className="stop-drop-cap">[Click here to select video]</p>
			<br />
		</div>
	);
}

export default VideoControl;
