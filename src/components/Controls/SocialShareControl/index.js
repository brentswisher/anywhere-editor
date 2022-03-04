import React, { useState } from 'react';
import { CheckBoxInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses } from '../../LayoutEditor/configSlice';

export function SocialShareControl( {
	showFacebook,
	showTwitter,
	showLinkedIn,
	showEmail,
	setData,
	required,
} ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<SocialShareEditor
				showFacebook={ showFacebook }
				showTwitter={ showTwitter }
				showLinkedIn={ showLinkedIn }
				showEmail={ showEmail }
				required={ required }
				setData={ setData }
				toggleEditable={ toggleEditable }
			/>
		);
	}
	return (
		<SocialShareDisplay
			showFacebook={ showFacebook }
			showTwitter={ showTwitter }
			showLinkedIn={ showLinkedIn }
			showEmail={ showEmail }
			onClick={ () => toggleEditable() }
		/>
	);
}

SocialShareControl.defaultProps = {
	showFacebook: true,
	showTwitter: true,
	showLinkedIn: true,
	showEmail: true,
	required: false,
};

function SocialShareEditor( props ) {
	const [ showFacebook, setShowFacebook ] = useState( props.showFacebook ),
		[ showTwitter, setShowTwitter ] = useState( props.showTwitter ),
		[ showLinkedIn, setShowLinkedIn ] = useState( props.showLinkedIn ),
		[ showEmail, setShowEmail ] = useState( props.showEmail ),
		saveChanges = ( e ) => {
			e.preventDefault();
			props.setData( {
				showFacebook,
				showTwitter,
				showLinkedIn,
				showEmail,
			} );
			props.toggleEditable();
		},
		cancelChanges = () => props.toggleEditable();
	return (
		<EditModal saveChanges={ saveChanges } cancelChanges={ cancelChanges }>
			<h2>Social Sharing</h2>
			<CheckBoxInput
				name="showFacebook"
				label="Show Facebook"
				value="1"
				checked={ showFacebook }
				onChange={ setShowFacebook }
			/>
			<CheckBoxInput
				name="showTwitter"
				label="Show Twitter"
				value="1"
				checked={ showTwitter }
				onChange={ setShowTwitter }
			/>
			<CheckBoxInput
				name="showLinkedIn"
				label="Show LinkedIn"
				value="1"
				checked={ showLinkedIn }
				onChange={ setShowLinkedIn }
			/>
			<CheckBoxInput
				name="showEmail"
				label="Show Email"
				value="1"
				checked={ showEmail }
				onChange={ setShowEmail }
			/>
		</EditModal>
	);
}

function SocialShareDisplay( props ) {
	const cssClasses = useSelector( selectCssClasses );
	return (
		<div
			onClick={ props.onClick }
			className={ cssClasses[ 'social-share-container' ] }
		>
			{ props.showFacebook && (
				<span className={ cssClasses[ 'social-share-icon' ] }>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						{ /* <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */ }
						<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
					</svg>
				</span>
			) }
			{ props.showTwitter && (
				<span className={ cssClasses[ 'social-share-icon' ] }>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						{ /* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */ }
						<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
					</svg>
				</span>
			) }
			{ props.showLinkedIn && (
				<span className={ cssClasses[ 'social-share-icon' ] }>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						{ /* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */ }
						<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
					</svg>
				</span>
			) }
			{ props.showEmail && (
				<span className={ cssClasses[ 'social-share-icon' ] }>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						{ /* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */ }
						<path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
					</svg>
				</span>
			) }
		</div>
	);
}

export default SocialShareControl;