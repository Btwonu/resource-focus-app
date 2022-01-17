import React, { useState, useEffect } from 'react';
import Shell from '../Shell';
import './styles.scss';

const Modal = ({ children, opened, openModal, closeModal }) => {
	const [visible, setVisible] = useState(opened);

	useEffect(() => {
		setVisible(opened);
	}, [opened]);

	return (
		<div className={`modal ${visible ? '' : 'hidden'}`}>
			<Shell>
				<h2>Modal</h2>

				<div className="modal__body">{children}</div>

				<button onClick={closeModal}>Close modal</button>
			</Shell>
		</div>
	);
};

export default Modal;
