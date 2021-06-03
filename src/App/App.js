import './App.css';
import { useEffect, useState } from 'react';
import NewsView from '../NewsView/NewsView';
import { getAllStories } from '../apiCalls';
import { cleanStoriesData } from '../utilities';
import { Route, Switch } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Error from '../Error/Error';

const App = () => {

  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [search, setSearch] = useState(false)

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

  const searchArticles = (event) => {
    const search = event.target.value;
    if (search === 'all') {
      setFilteredArticles(stories);
      setSearch(true);
    } else {
      const filteredSearch = stories.filter(story => story.section === search);
      setFilteredArticles(filteredSearch);
      setSearch(true);
    }
  }

  const resetFilter = () => {
    setSearch(false);
  }

  return (
    <div className="App">
      <Header />
      {error && <Error error='Oops, something went wrong' />}
      {!error &&
        <main>
          <Switch>
            <Route exact path='/' render={() => {
              return (
                <>
                  <Filter search={searchArticles} />
                  <NewsView stories={stories} filteredStories={filteredArticles} search={search} />
                </>
              )
            }}
            />
            <Route exact path='/:id' render={({ match }) => {
              const currentStory = stories.find(story => {
                return story.id.toString() === match.params.id
              });
              return (
                <>
                  {!currentStory && <h2>Loading...</h2>}
                  {currentStory && <ArticleDetail currentStory={currentStory} reset={resetFilter} />}
                </>
              )
            }}
            />
          </Switch>
        </main>
      }
    </div>
  );
}

export default App;
