import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesApi';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getMovieCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w300/${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
