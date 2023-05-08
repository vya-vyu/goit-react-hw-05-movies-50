import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/moviesApi';
import { Link } from 'react-router-dom';

const TrendingMovies = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  useEffect(() => {
    getTrendingMovies().then(arr => setTrendMovies(arr));
  }, []);

  return (
    <ul>
      {trendMovies &&
        trendMovies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default TrendingMovies;
