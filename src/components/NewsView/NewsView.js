import React from 'react';
import Article from '../Article/Article';
import './NewsView.css';

const NewsView = ({ stories, filteredStories, search, error }) => {

  let storiesToDisplay = stories;

  if (search && filteredStories.length) {
    storiesToDisplay = filteredStories
  }
  else if (!filteredStories.length && search) {
    return (<h1 className='no-match-message'>No articles match that section, please try again</h1>)
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
        id={story.id}
      />
    )
  })

  return (

    <section className='news-view'>

      <h1 className='news-results'>Articles: {storyCards.length}</h1>
      {!stories.length && <h2>Loading...</h2>}
      {storyCards}

    </section>
  )
}

export default NewsView;