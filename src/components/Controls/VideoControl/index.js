import React, { useState } from 'react';
import { TextInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

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
		videoIdRegex = /[\w-]{11}/,
		validUrlRegex = /(?:https:\/\/(www)?)?(?:youtube.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([\w-]{11})/,
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( videoId.length && ! title.length ) {
				setError( 'Please enter the video title text to continue' );
			} else if ( ! videoId.match( videoIdRegex ) ) {
				setError( 'Please enter the valide youtube videoId' );
			} else {
				props.setData( {
					videoId,
					title,
				} );
				setError( '' );
				props.toggleEditable();
			}
		},
		cancelChanges = () => props.toggleEditable(),
		processVideoId = ( url ) => {
			const videoIdMatch = url.match( validUrlRegex );
			console.log( videoIdMatch );
			if ( videoIdMatch && videoIdMatch.length === 3 ) {
				setVideoId( videoIdMatch[ 2 ] );
			} else {
				setVideoId( url );
			}
		};

	return (
		<EditModal
			saveChanges={ saveChanges }
			cancelChanges={ cancelChanges }
			error={ error }
		>
			<TextInput
				name="videoId"
				label="YouTube VideoId"
				helpText="Please enter the YouTube videoId or copy/paste the url of the video you wish to use."
				autoFocus={ true }
				value={ videoId }
				onChange={ processVideoId }
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
	const cssClasses = useSelector( selectCssClasses );

	if ( props.videoId ) {
		return (
			<div
				className={ cssClasses[ 'video-container' ] }
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
			<p className={ cssClasses[ 'no-drop-cap' ] }>
				[Click here to select video]
			</p>
			<br />
		</div>
	);
}

export default VideoControl;
