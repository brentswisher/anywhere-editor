import React from 'react';
import Modal from 'react-modal';

export function EditModal( {
	error,
	saveChanges,
	cancelChanges,
	children,
	appElement,
} ) {
	Modal.setAppElement( appElement );
	return (
		<Modal
			isOpen={ true }
			contentLabel="Edit Sidebar Modal Window"
			className="modal"
			overlayClassName="modal-overlay"
			onRequestClose={ cancelChanges }
		>
			{ error && <div className="callout alert">{ error }</div> }
			{ children }
			<div className="button-group">
				<button
					type="button"
					onClick={ saveChanges }
					className="button primary"
				>
					Update
				</button>
				<button
					type="button"
					onClick={ cancelChanges }
					className="button secondary"
				>
					Cancel
				</button>
			</div>
		</Modal>
	);
}

EditModal.defaultProps = {
	appElement: '#root',
};

export default EditModal;
