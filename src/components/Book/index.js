import React from 'react';
import './styles.scss';

const Book = ({
	id,
	title,
	authors,
	description,
	url,
	currentPage,
	totalPages,
	completed,
}) => {
	const authorList = authors.map((author, i) => <li key={i}>{author}</li>);
	let pagesMarkup;

	if (totalPages && currentPage > 0) {
		pagesMarkup = (
			<p>
				<span>{currentPage}</span>/<span>{totalPages}</span>
			</p>
		);
	} else if (totalPages && !currentPage) {
		pagesMarkup = (
			<p>
				<span>{totalPages}</span>
			</p>
		);
	}

	return (
		<li>
			<h4>
				<a href={url} target="_blank">
					{title}
				</a>
			</h4>

			<p>
				{authorList.length && authorList.length > 1
					? 'Authors:'
					: 'Author:'}
			</p>

			<ul>{authorList}</ul>

			<p>{description && description}</p>

			{/* {currentPage > 0 && totalPages && (
				<p>
					<span>{currentPage}</span>/<span>{totalPages}</span>
				</p>
			)} */}

			{pagesMarkup && pagesMarkup}

			<p>
				Completed? : <span>{completed ? 'Yes' : 'No'}</span>
			</p>
		</li>
	);
};

export default Book;
