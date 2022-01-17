import React from 'react';
import './styles.scss';

const Textarea = ({ id, labelName, ...props }) => {
	return (
		<div className="form__textarea">
			{labelName ? <label for={id}>{labelName}</label> : null}

			<textarea id={id} {...props}></textarea>
		</div>
	);
};

export default Textarea;
