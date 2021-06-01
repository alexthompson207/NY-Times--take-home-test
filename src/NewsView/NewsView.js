import React from 'react';
import Article from '../Article/Article';
import './NewsView.css';

const NewsView = ({ stories }) => {

  const storyCards = stories.map(story => {
    return (
      <Article
        key={story.id}
        title={story.title}
        author={story.author}
        published={story.publishedDate}
        photo={story.photo}
        alt={story.photoAlt}
      />
    )
  })

  return (
    <section>
      <h1>Articles {storyCards.length}</h1>
      {storyCards}
    </section>
  )
}

export default NewsView;