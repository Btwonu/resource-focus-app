import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VideoForm from '../components/Video-form';
import BookForm from '../components/Book-form';
import ArticleForm from '../components/Article-form';
import Book from '../components/Book';

// Data
import { TOPICS_DATA } from '../data-mock';

// Services
import * as db from '../services/firestore-service';

const Dashboard = () => {
  const [topics, setTopics] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    db.getAll('books')
      .then((bookArray) => {
        const bookList = bookArray.map((book) => (
          <Book key={book.id} {...book} />
        ));

        setBooks(bookList);
      })
      .catch((err) => console.log(err));
  }, []);

  const topicsList = topics.map((topic) => (
    <li key={topic.id}>
      <Link to={topic.id}>{topic.title}</Link>
    </li>
  ));

  return (
    <>
      <h2>Dashboard</h2>

      <ul>{topicsList}</ul>

      <VideoForm />

      <hr />

      <BookForm />

      <hr />

      <ArticleForm />

      {books && <ul>{books}</ul>}

      <Outlet />
    </>
  );
};

export default Dashboard;
