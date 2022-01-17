import React, { useState } from 'react';
import './styles.scss';
import FormInput from '../FormInput';
import Textarea from '../Textarea';

const Form = ({ title }) => {
	const [formState, setFormState] = useState({
		title: '',
		body: '',
	});

	// Form methods
	const onChange = (e) => {
		const { name, value } = e.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		console.log('submitting...');

		console.log(formState);
		// setTasks([
		//   ...tasks,
		//   { title: taskTitle, body: taskBody, completed: false },
		// ]);
	};

	return (
		<div className="form">
			<h2 className="form__head">{title}</h2>

			<form onSubmit={onFormSubmit}>
				<div className="form__body">
					<FormInput
						id="task-title"
						name="title"
						type="text"
						placeholder="Title"
						labelName="Enter Title"
						value={formState.title}
						onChange={onChange}
					/>

					<Textarea
						id="task-description"
						name="body"
						placeholder="Description"
						labelName="Enter Description"
						value={formState.body}
						onChange={onChange}
					/>

					<button type="submit">Add</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
