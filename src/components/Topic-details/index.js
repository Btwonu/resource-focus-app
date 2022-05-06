import React from 'react';
import './styles.scss';

import Book from '../Book';
import Video from '../Video';
import Article from '../Article';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { get, getMany } from '../../services/firestore-service';

const TopicDetails = () => {
  const { topicId } = useParams();
  const [books, setBooks] = useState();
  const [videos, setVideos] = useState();
  const [articles, setArticles] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    get(`/topics/${topicId}`)
      .then((currentTopic) => {
        setTitle(currentTopic.title);

        // Get books
        getMany('books', currentTopic.bookIds)
          .then((bookArray) => {
            const bookList = bookArray.map((book) => (
              <Book key={book.id} {...book} />
            ));

            setBooks(bookList);
          })
          .catch((err) => console.log(err));

        // Get videos
        getMany('videos', currentTopic.videoIds)
          .then((videoArray) => {
            const videoList = videoArray.map((video) => (
              <Video key={video.id} {...video} />
            ));

            setVideos(videoList);
          })
          .catch((err) => console.log(err));

        // Get articles
        getMany('articles', currentTopic.articleIds)
          .then((articleArray) => {
            console.log(articleArray);
            const articleList = articleArray.map((article) => (
              <Article key={article.id} {...article} />
            ));

            setArticles(articleList);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {title && <h1>{title}</h1>}

      <h2>Videos</h2>

      {videos && <ul>{videos}</ul>}

      <h2>Articles</h2>

      {articles && <ul>{articles}</ul>}

      <h2>Books</h2>

      {books && <ul>{books}</ul>}
    </>
  );
};

export default TopicDetails;
