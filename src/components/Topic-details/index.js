import React from 'react';
import './styles.scss';

import Book from '../Book';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { get, getAll, getMany } from '../../services/firestore-service';

const TopicDetails = () => {
  let { topicId } = useParams();
  let [books, setBooks] = useState();

  useEffect(() => {
    get(`/topics/${topicId}`)
      .then((res) => {
        getMany('books', res.bookIds)
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
      <div>{topicId}</div>

      {books && <ul>{books}</ul>}
    </>
  );
};

export default TopicDetails;
