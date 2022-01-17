import React from 'react';
import './styles.scss';

const FormInput = ({ id, onChange, labelName, ...props }) => {
	return (
		<div className="form__field">
			{labelName ? <label for={id}>{labelName}</label> : null}

			<input id={id} onChange={onChange} {...props} />
		</div>
	);
};

export default FormInput;
