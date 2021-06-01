import './App.css';
import { useEffect, useState } from 'react';
import NewsView from '../NewsView/NewsView';
import { getAllStories } from '../apiCalls';
import { cleanStoriesData } from '../utilities';

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
      <NewsView />
    </div>
  );
}

export default App;
