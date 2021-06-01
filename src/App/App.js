import './App.css';
import { useEffect, useState } from 'react';
import NewsView from '../NewsView/NewsView';
import { getAllStories } from '../apiCalls';

const App = () => {

  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllStories()
      .then(response => {
        if (response.status === 'OK') {
          setStories(response.results)
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
