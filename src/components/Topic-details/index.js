import React from 'react';
import './styles.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Book from '../Book';
import Video from '../Video';
import Article from '../Article';
import VideoForm from '../Video-form';
import ArticleForm from '../Article-form';
import BookForm from '../Book-form';

import { get, getMany } from '../../services/firestore-service';

let cache = null;

const TopicDetails = () => {
	const { topicId } = useParams();
	const [books, setBooks] = useState();
	const [videos, setVideos] = useState();
	const [articles, setArticles] = useState();
	const [title, setTitle] = useState('');

	const [bookState, setBookState] = useState(
		cache !== null ? cache : { bookData: null }
	);

	console.log({ cache });
	console.log({ bookState });

	useEffect(() => {
		console.log('hi');
		console.log(bookState);

		if (bookState.bookData === null) {
			console.log('Loading...');

			setTimeout(() => {
				console.log('Done loading.');

				setBookState({ bookData: 'not null' });
			}, 1000);
		}

		return () => {
			console.log('bye');
			console.log({ bookState });
			cache = bookState;
			console.log({ cache });
		};
	}, []);

	// useEffect(() => {
	// 	get(`/topics/${topicId}`)
	// 		.then((currentTopic) => {
	// 			setTitle(currentTopic.title);

	// 			// Get books
	// 			getMany('books', currentTopic.bookIds)
	// 				.then((bookArray) => {
	// 					const bookList = bookArray.map((book) => (
	// 						<Book key={book.id} {...book} />
	// 					));

	// 					setBooks(bookList);
	// 				})
	// 				.catch((err) => console.log(err));

	// 			// Get videos
	// 			getMany('videos', currentTopic.videoIds)
	// 				.then((videoArray) => {
	// 					const videoList = videoArray.map((video) => (
	// 						<Video key={video.id} {...video} />
	// 					));

	// 					setVideos(videoList);
	// 				})
	// 				.catch((err) => console.log(err));

	// 			// Get articles
	// 			getMany('articles', currentTopic.articleIds)
	// 				.then((articleArray) => {
	// 					console.log(articleArray);
	// 					const articleList = articleArray.map((article) => (
	// 						<Article key={article.id} {...article} />
	// 					));

	// 					setArticles(articleList);
	// 				})
	// 				.catch((err) => console.log(err));
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<>
			{title && <h1>{title}</h1>}

			<h2>Videos</h2>

			{videos && <ul>{videos}</ul>}

			<VideoForm />

			<h2>Articles</h2>

			{articles && <ul>{articles}</ul>}

			<ArticleForm />

			<h2>Books</h2>

			{books && <ul>{books}</ul>}

			<BookForm />
		</>
	);
};

export default TopicDetails;
