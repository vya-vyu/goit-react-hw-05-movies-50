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
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://vaksi.by/design/verona/images/no_image.png'
              }
              alt="name"
              width="100"
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
