import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VideoForm from '../components/Video-form';
import BookForm from '../components/Book-form';
import ArticleForm from '../components/Article-form';
import Book from '../components/Book';
import Topic from '../components/Topic';
import Shell from '../components/Shell';

// Data
import { TOPICS_DATA } from '../data-mock';

// Services
import * as db from '../services/firestore-service';

const Dashboard = () => {
	const [topics, setTopics] = useState([]);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		db.getAll('topics').then((topicArray) => {
			const topicsList = topicArray.map((topic) => (
				<Topic key={topic.id} {...topic} />
			));

			setTopics(topicsList);
		});

		db.getAll('books')
			.then((bookArray) => {
				const bookList = bookArray.map((book) => (
					<Book key={book.id} {...book} />
				));

				console.log(bookList);
				setBooks(bookList);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Shell>
			<h2>Dashboard</h2>

			{topics && <ul>{topics}</ul>}

			<VideoForm />

			<hr />

			<BookForm />

			<hr />

			<ArticleForm />

			{books && <ul>{books}</ul>}

			<Outlet />
		</Shell>
	);
};

export default Dashboard;
