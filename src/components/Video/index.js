import React from 'react';
import './styles.scss';

const Video = ({ id, description, tags, title, url, createdAt }) => {
  let embedUrl = url.replace(/watch\?v=/, 'embed/');

  const tagList = tags.map((tag) => <li>{tag}</li>);

  return (
    <>
      <h3>{title}</h3>

      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p>{description}</p>

      <ul>{tagList}</ul>
    </>
  );
};

export default Video;
