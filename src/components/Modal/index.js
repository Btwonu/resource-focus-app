import React, { useState, useEffect } from 'react';
import Shell from '../Shell';
import './styles.scss';

const Modal = ({ children, triggerModalText }) => {
	const [visible, setVisible] = useState(false);

	// Modal methods
	const openModal = () => {
		setVisible(true);
	};

	const closeModal = () => {
		setVisible(false);
	};

	if (visible) {
		return (
			<div className="modal visible">
				<Shell className="modal__shell">
					<div className="modal__body">{children}</div>

					<button
						className="btn btn--dark modal__close"
						onClick={closeModal}
					>
						Close
					</button>
				</Shell>
			</div>
		);
	} else {
		return (
			<button className="btn btn--dark" onClick={openModal}>
				{triggerModalText || 'Open Modal'}
			</button>
		);
	}
};

export default Modal;
