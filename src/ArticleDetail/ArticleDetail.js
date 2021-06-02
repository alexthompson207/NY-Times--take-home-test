import './ArticleDetail.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ currentStory }) => {

  const { title, photo, photoAlt, overview, author, link, section, publishedDate } = currentStory;

  return (
    <>
      <Link className='back-btn' to='/'>Back</Link>
      <section className='article-details-view'>
        <h1 className='details-title'>{title}</h1>
        <img className='details-img' src={photo} alt={photoAlt}></img>
        <h2 className='details-overview'>{overview}</h2>
        <p className='details-author'>{author}</p>
        <div className='details-detail'>
          <p className='details-section'>{section.toUpperCase()}</p>
          <p className='details-date'>{publishedDate}</p>
        </div>
        <a href={link} className='details-link' target='_blank' rel='noreferrer'>View the full article</a>
      </section>
    </>
  )
}

export default ArticleDetail;