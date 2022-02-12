import React from 'react';
import './styles.scss';

const Book = ({
	id,
	title,
	authors,
	url,
	currentPage,
	totalPages,
	completed,
}) => {
	const authorList = authors.map((author, i) => <li key={i}>{author}</li>);

	return (
		<li>
			<h4>
				<a href={url} target="_blank">
					{title}
				</a>
			</h4>

			<p>
				{authorList.length && authorList.length > 1 ? 'Authors:' : 'Author:'}
			</p>

			<ul>{authorList}</ul>

			<p>
				<span>{currentPage}</span>/<span>{totalPages}</span>
			</p>

			<p>
				Completed? : <span>{completed ? 'Yes' : 'No'}</span>
			</p>
		</li>
	);
};

export default Book;
