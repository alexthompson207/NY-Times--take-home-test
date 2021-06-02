import React from 'react';
import Article from '../Article/Article';
import './NewsView.css';

const NewsView = ({ stories, filteredStories }) => {

  let storiesToDisplay = filteredStories;

  if (!filteredStories.length) {
    storiesToDisplay = stories
  }

  const storyCards = storiesToDisplay.map(story => {
    return (
      <Article
        key={story.id}
        title={story.title}
        author={story.author}
        published={story.publishedDate}
        photo={story.photo}
        alt={story.photoAlt}
        section={story.section}
      />
    )
  })

  return (
    <section className='news-view'>
      <h1>All Top Articles: {storyCards.length}</h1>
      {storyCards}
    </section>
  )
}

export default NewsView;