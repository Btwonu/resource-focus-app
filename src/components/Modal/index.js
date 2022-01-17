import React, { useState, useEffect } from 'react';
import Shell from '../Shell';
import './styles.scss';

const Modal = ({ children }) => {
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
				<Shell>
					<h2>Modal</h2>

					<div className="modal__body">{children}</div>

					<button onClick={closeModal}>Close modal</button>
				</Shell>
			</div>
		);
	} else {
		return <button onClick={openModal}>Open Modal</button>;
	}
};

export default Modal;
