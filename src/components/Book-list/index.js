import React from 'react';
import './styles.scss';
import { BOOKS_DATA } from '../../data-mock';

import Book from '../Book';

const BookList = () => {
	const booksList = BOOKS_DATA.map((book) => <Book key={book.id} {...book} />);
	return <>{booksList}</>;
};

export default BookList;
