import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useParams, Link } from 'react-router-dom';

const Topic = ({ id, title }) => {
  const { topicId } = useParams();
  const [bookIds, setBookIds] = useState(null);
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   getTopic(topicId)
  //     .then((docSnapshot) => {
  //       if (docSnapshot.exists()) {
  //         const docData = docSnapshot.data();
  //         console.log('Setting books id...');
  //         setBookIds(docData.bookIds);
  //       } else {
  //         console.log('Does not exist.');
  //       }
  //     })
  //     .catch((err) => console.log('Error:', err));
  // }, [topicId]);

  // useEffect(() => {
  //   const bookPromises = [];

  //   bookIds?.forEach((bookId) => {
  //     bookPromises.push(getBook(bookId));
  //   });

  //   const arr = Promise.all(bookPromises)
  //     .then((values) =>
  //       values.map((docSnapshot) => {
  //         if (docSnapshot.exists()) {
  //           return {
  //             id: docSnapshot.id,
  //             ...docSnapshot.data(),
  //           };
  //         } else {
  //           console.log('Does not exist.');
  //           return null;
  //         }
  //       })
  //     )
  //     .catch((err) => console.log('Error:', err));

  //   arr.then((result) => setBooks(result));
  // }, [bookIds]);

  return (
    <li>
      <Link to={`/topics/${id}`}>{title}</Link>
    </li>
  );
};

export default Topic;
