import React, { useState } from 'react';
import '../Book-form/styles.scss';
import FormInput from '../Form-input';

// Services
import * as db from '../../services/firestore-service';

const ArticleForm = ({ topicId }) => {
	console.log('article-form', { topicId });
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
		console.log('submit');
		e.preventDefault();

		console.log('submitting...');

		const tagsArr = formState.tags.split(' ');

		const data = {
			...formState,
			tags: tagsArr,
			completed: false,
			createdAt: Date.now(),
		};

		db.save('articles', data)
			.then((docRef) => {
				console.log(`Article succesfully stored`);

				db.updateArray(`topics/${topicId}`, 'articleIds', docRef.id)
					.then((res) => {
						console.log('Successfully added book to topic');
						console.log(res);
					})
					.catch((err) => {
						alert('Error while saving book id to topic');
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
		<div className="form form--article">
			<div className="form__inner">
				<h2 className="form__head">Article Form</h2>

				<form onSubmit={onFormSubmit}>
					<div className="form__body">
						<FormInput
							id="article-title"
							name="title"
							type="text"
							placeholder="article title"
							labelName="Enter Title"
							value={formState.title}
							onChange={onChange}
						/>

						<FormInput
							id="article-description"
							name="description"
							placeholder="article Description"
							labelName="Description"
							value={formState.description}
							onChange={onChange}
						/>

						<FormInput
							id="article-url"
							name="url"
							type="text"
							placeholder="article url"
							labelName="Enter URL"
							value={formState.url}
							onChange={onChange}
						/>

						<FormInput
							id="article-tags"
							name="tags"
							placeholder="article Tags"
							labelName="Tags"
							value={formState.tags}
							onChange={onChange}
						/>
					</div>

					<div className="form__actions">
						<button className="btn btn--dark" type="submit">
							Add article
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ArticleForm;
