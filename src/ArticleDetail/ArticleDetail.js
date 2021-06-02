import './ArticleDetail.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ currentStory }) => {

  const { title, photo, photoAlt, overview, author, link } = currentStory;

  return (
    <section className='article-details-view'>
      <Link to='/'>Back</Link>
      <h1 className='details-title'>{title}</h1>
      <img className='details-img' src={photo} alt={photoAlt}></img>
      <h2 className='details-overview'>{overview}</h2>
      <p className='details-author'>{author}</p>
      <a href={link} className='details-link' target='_blank' rel='noreferrer'>View the Article</a>
    </section>
  )
}

export default ArticleDetail;