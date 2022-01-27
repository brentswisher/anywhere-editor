import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { selectCssClasses } from '../LayoutEditor/configSlice';

export function EditModal( {
	error,
	saveChanges,
	cancelChanges,
	children,
	appElement,
} ) {
	Modal.setAppElement( '#publication-editor' );
	const cssClasses = useSelector( selectCssClasses );
	return (
		<Modal
			isOpen={ true }
			contentLabel="Edit Sidebar Modal Window"
			className={ cssClasses[ 'modal' ] }
			overlayClassName={ cssClasses[ 'modal-overlay' ] }
			onRequestClose={ cancelChanges }
		>
			{ error && (
				<div className={ cssClasses[ 'error-container' ] }>
					{ error }
				</div>
			) }
			{ children }
			<div className={ cssClasses[ 'button-group' ] }>
				<button
					type="button"
					onClick={ saveChanges }
					className={ cssClasses[ 'button-primary' ] }
				>
					Update
				</button>
				<button
					type="button"
					onClick={ cancelChanges }
					className={ cssClasses[ 'button-secondary' ] }
				>
					Cancel
				</button>
			</div>
		</Modal>
	);
}

EditModal.defaultProps = {
	appElement: '#react-root',
};

export default EditModal;
