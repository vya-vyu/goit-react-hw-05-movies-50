import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesApi';

const MovieDescription = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <img
            src={`https://www.themoviedb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div>
            <h2>
              {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
            </h2>
            <p>User Score : {Math.round(movieDetails.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h4>Genres</h4>
            <ul>
              {movieDetails.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDescription;
