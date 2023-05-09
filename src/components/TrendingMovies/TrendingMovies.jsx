import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';

const TrendingMovies = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  useEffect(() => {
    getTrendingMovies().then(arr => setTrendMovies(arr));
  }, []);

  return <>{trendMovies && <MoviesList movies={trendMovies} />}</>;
};

export default TrendingMovies;
