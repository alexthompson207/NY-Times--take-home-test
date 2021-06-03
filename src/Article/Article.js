import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';

const Article = ({ id, title, author, published, photo, alt, section }) => {
  console.log(id)
  return (
    <Link to={`/${id}`} className='article-card' id={id}>
      <img className='article-img' alt={alt} src={photo} />
      <div className='article-text-box'>
        <h2 className='article-title'>{title}</h2>
        <p className='article-author'>{author}</p>
        <div className='article-details'>
          <p className='article-section'>{section.toUpperCase()}</p>
          <p className='article-date'>{published}</p>
        </div>
      </div>
    </Link>
  )
}

export default Article;