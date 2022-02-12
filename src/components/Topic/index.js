import {
	ITEMS_DATA,
	BOOKS_DATA,
	VIDEO_DATA,
	CHILD_DATA,
} from '../../data-mock';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';

import Hero from '../Hero';
import Section from '../Section';
import Shell from '../Shell';
import Divider from '../Divider';
import Button from '../Button';
import SubSection from '../Sub-section';
import TaskList from '../Task-list';
import VideoForm from '../Video-form/VideoForm';
import Modal from '../Modal';
import Timer from '../Timer';
import TopicList from '../Topic-list';
import Book from '../Book';
import BookList from '../Book-list';

// Services
import { getTopic } from '../../services/topic-service';
import { getBook } from '../../services/book-service';

const Topic = ({ title }) => {
	const { topicId } = useParams();
	const [bookIds, setBookIds] = useState(null);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getTopic(topicId)
			.then((docSnapshot) => {
				if (docSnapshot.exists()) {
					const docData = docSnapshot.data();
					console.log('Setting books id...');
					setBookIds(docData.bookIds);
				} else {
					console.log('Does not exist.');
				}
			})
			.catch((err) => console.log('Error:', err));
	}, [topicId]);

	useEffect(() => {
		const bookPromises = [];

		bookIds?.forEach((bookId) => {
			bookPromises.push(getBook(bookId));
		});

		const arr = Promise.all(bookPromises)
			.then((values) =>
				values.map((docSnapshot) => {
					if (docSnapshot.exists()) {
						return {
							id: docSnapshot.id,
							...docSnapshot.data(),
						};
					} else {
						console.log('Does not exist.');
						return null;
					}
				})
			)
			.catch((err) => console.log('Error:', err));

		arr.then((result) => setBooks(result));
	}, [bookIds]);

	const returnLinkItem = (item, i) => {
		return (
			<li key={i}>
				<a href={item.url}>{item.title}</a>
			</li>
		);
	};

	const itemsArray = ITEMS_DATA.map(returnLinkItem);
	const booksArray = BOOKS_DATA.map(returnLinkItem);
	const videoArray = VIDEO_DATA.map(returnLinkItem);
	const childArray = CHILD_DATA.map(returnLinkItem);

	return (
		<Shell>
			<Hero title={title} />

			{console.log(books)}

			{books && books.length ? (
				<ul>
					{books.map((bookProps) => (
						<Book key={bookProps.id} {...bookProps} />
					))}
				</ul>
			) : null}

			<Divider />
			{/* 
			<Section title="Readings" items={itemsArray}>
				<SubSection title="Books" items={booksArray} />
			</Section>

			<Section title="Videos" items={videoArray}>
				<Modal>
					<VideoForm></VideoForm>
				</Modal>
			</Section>

			<Section title="Tasks">
				<TaskList></TaskList>
			</Section> */}

			<Timer />
			{/* {bookIds} Call firestore */}
		</Shell>
	);
};

export default Topic;
