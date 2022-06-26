import React, { useState } from 'react';
import './styles.scss';
import FormInput from '../Form-input';

// Services
import * as db from '../../services/firestore-service';

const BookForm = ({ topicId }) => {
	const [formState, setFormState] = useState({
		title: '',
		description: '',
		url: '',
		authors: '',
		tags: '',
		totalPages: 0,
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

		const authorsArr = formState.authors.split(' ');
		const tagsArr = formState.tags.split(' ');

		const data = {
			...formState,
			tags: tagsArr,
			authors: authorsArr,
			completed: false,
			createdAt: Date.now(),
			currentPage: 0,
		};

		db.save('books', data)
			.then((docRef) => {
				console.log(`Book succesfully stored`);

				db.updateArray(`topics/${topicId}`, 'bookIds', docRef.id)
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
			authors: '',
			tags: '',
			totalPages: '',
		});
	};

	return (
		<div className="form form--book">
			<div className="form__inner">
				<h2 className="form__head">Book Form</h2>

				<form onSubmit={onFormSubmit}>
					<div className="form__body">
						<FormInput
							id="book-title"
							name="title"
							type="text"
							placeholder="Book title"
							labelName="Enter Title"
							value={formState.title}
							onChange={onChange}
						/>

						<FormInput
							id="book-authors"
							name="authors"
							type="text"
							placeholder="Book authors"
							labelName="Authors"
							value={formState.authors}
							onChange={onChange}
						/>

						<FormInput
							id="book-description"
							name="description"
							placeholder="Book Description"
							labelName="Description"
							value={formState.description}
							onChange={onChange}
						/>

						<FormInput
							id="book-url"
							name="url"
							type="text"
							placeholder="Book url"
							labelName="Enter URL"
							value={formState.url}
							onChange={onChange}
						/>

						<FormInput
							id="book-tags"
							name="tags"
							placeholder="Book Tags"
							labelName="Tags"
							value={formState.tags}
							onChange={onChange}
						/>

						<FormInput
							id="book-pages"
							name="totalPages"
							type="number"
							placeholder="Book pages"
							labelName="Pages"
							value={formState.totalPages}
							onChange={onChange}
						/>
					</div>

					<div className="form__actions">
						<button className="btn btn--dark" type="submit">
							Add book
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookForm;
