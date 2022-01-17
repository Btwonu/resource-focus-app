import React, { useState } from 'react';
import './styles.scss';
import FormInput from '../Form-input';

const VideoForm = ({ children }) => {
	const [formState, setFormState] = useState({
		title: '',
		url: '',
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

		setFormState({
			title: '',
			url: '',
		});
	};

	return (
		<div className="form-video">
			<h2 className="form__head">Video Form</h2>

			<form onSubmit={onFormSubmit}>
				<div className="form__body">
					<FormInput
						id="video-title"
						name="title"
						type="text"
						placeholder="Video title"
						labelName="Enter Title"
						value={formState.title}
						onChange={onChange}
					/>

					<FormInput
						id="video-url"
						name="url"
						type="text"
						placeholder="Video url"
						labelName="Enter URL"
						value={formState.url}
						onChange={onChange}
					/>

					<button type="submit">Add</button>
				</div>
			</form>
		</div>
	);
};

export default VideoForm;
