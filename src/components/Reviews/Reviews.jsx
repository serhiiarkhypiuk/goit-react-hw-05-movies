import * as api from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import GridList from 'components/GridList/GridList';
import NotFoundView from 'views/NotFound';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    api.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>

      {reviews && (
        <GridList>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <li key={review.id}>
                <p>
                  <b>Author: {review.author}</b>
                </p>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <NotFoundView text="No reviews for this movie yet" />
          )}
        </GridList>
      )}
    </>
  );
}
