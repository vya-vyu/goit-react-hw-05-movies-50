import GoBack from 'components/GoBack/GoBack';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesApi';

const MovieDescription = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setMovieDetails(data))
      .catch(err => console.log(err.massege));
  }, [movieId]);

  return (
    <>
      <GoBack />
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
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDescription;
