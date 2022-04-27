import React from 'react';
import './styles.scss';

import Book from '../Book';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { get, getMany } from '../../services/firestore-service';

const TopicDetails = () => {
  let { topicId } = useParams();
  let [books, setBooks] = useState();
  let [title, setTitle] = useState('');

  useEffect(() => {
    get(`/topics/${topicId}`)
      .then((currentTopic) => {
        setTitle(currentTopic.title);

        getMany('books', currentTopic.bookIds)
          .then((bookArray) => {
            const bookList = bookArray.map((book) => (
              <Book key={book.id} {...book} />
            ));

            setBooks(bookList);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {title && <h1>{title}</h1>}

      {books && <ul>{books}</ul>}
    </>
  );
};

export default TopicDetails;
