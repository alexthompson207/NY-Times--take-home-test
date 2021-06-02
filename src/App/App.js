import './App.css';
import { useEffect, useState } from 'react';
import NewsView from '../NewsView/NewsView';
import { getAllStories } from '../apiCalls';
import { cleanStoriesData } from '../utilities';
import { Route, Switch } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const App = () => {

  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllStories()
      .then(response => {
        if (response.status === 'OK') {
          setStories(cleanStoriesData(response))
          setError('')
        } else {
          setError('fetch error')
        }
      })
      .catch(err => setError('fetch error'))

  }, []);

  return (
    <div className="App">
      hi
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <>
              <NewsView stories={stories} />
            </>
          )
        }}
        />
        <Route exact path='/:id' render={() => {
          const currentStory = stories.filter(story => story.id === matchMedia.params.publishedDate);
          return (
            <>
              {currentStory && <ArticleDetail currentStory={currentStory} />}
            </>
          )
        }}
        />
      </Switch>
    </div>
  );
}

export default App;
