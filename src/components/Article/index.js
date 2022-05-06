import React from 'react';
import './styles.scss';

const Article = ({
  id,
  title,
  description,
  url,
  tags,
  completed,
  createdAt,
}) => {
  const tagList = tags.map((tag, i) => <li key={i}>{tag}</li>);

  return (
    <>
      <h3>
        <a href={url}>{title}</a>
      </h3>

      <p>{description}</p>

      {tagList && <ul>tagList</ul>}
    </>
  );
};

export default Article;
