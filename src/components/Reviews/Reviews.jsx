import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>

      {reviews && !reviews.length && (
        <p>We don`t have any reviews to this movie</p>
      )}
    </>
  );
};

export default Reviews;
