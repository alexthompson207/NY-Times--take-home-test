import './App.css';
import { useEffect, useState } from 'react';
import NewsView from '../NewsView/NewsView';
import { getAllStories } from '../apiCalls';
import { cleanStoriesData } from '../utilities';
import { Route, Switch } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
// import Header from '../Header/Header';

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
      .catch(err => {
        console.log(err)
        setError('fetch error')
      })

  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <>
              <NewsView stories={stories} />
            </>
          )
        }}
        />
        <Route exact path='/:title' render={({ match }) => {
          const currentStory = stories.find(story => {
            console.log(story.id.toString())
            return story.title === match.params.title
          });
          console.log((match))
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
