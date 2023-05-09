import MoviesList from 'components/MoviesList/MoviesList';
import SerchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/moviesApi';
const Movies = () => {
  const [searchName, setSearchName] = useSearchParams();

  const [movies, setMovies] = useState(null);
  const query = searchName.get('query');

  useEffect(() => {
    getSearchMovies(query).then(res => setMovies(res));
  }, [query]);

  return (
    <>
      <SerchForm />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
