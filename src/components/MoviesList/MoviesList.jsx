import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
