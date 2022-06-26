import React, { useState } from 'react';
import '../Book-form/styles.scss';
import FormInput from '../Form-input';

// Services
import * as db from '../../services/firestore-service';

const VideoForm = ({ children, topicId }) => {
	console.log({ topicId });
	const [formState, setFormState] = useState({
		title: '',
		description: '',
		url: '',
		tags: '',
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

		const tagsArr = formState.tags.split(' ');

		const data = {
			...formState,
			tags: tagsArr,
			completed: false,
			createdAt: Date.now(),
		};

		// console.log({ topicId });
		// console.log({ data });

		db.save('videos', data)
			.then((docRef) => {
				console.log(`Document reference ${docRef} succesfully stored`);
				db.updateArray(`topics/${topicId}`, 'videoIds', docRef.id)
					.then((res) => {
						console.log('Successfully added video to topic');
						console.log(res);
					})
					.catch((err) => {
						alert('Error while saving video id to topic');
						console.log(err);
					});
			})
			.catch((err) => console.error(err));

		setFormState({
			title: '',
			description: '',
			url: '',
			tags: '',
		});
	};

	return (
		<div className="form form--video">
			<div className="form__inner">
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
							id="video-description"
							name="description"
							placeholder="Video Description"
							labelName="Description"
							value={formState.description}
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

						<FormInput
							id="video-tags"
							name="tags"
							placeholder="Video Tags"
							labelName="Tags"
							value={formState.tags}
							onChange={onChange}
						/>
					</div>

					<div className="form__actions">
						<button className="btn btn--dark" type="submit">
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default VideoForm;
