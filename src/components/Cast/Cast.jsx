import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as api from '../../services/movies-api';
import GridList from 'components/GridList/GridList';
import NotFoundView from 'views/NotFound';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    api.fetchMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>

      {cast && (
        <GridList>
          {cast.length > 0 ? (
            cast.map(person => (
              <li key={person.id}>
                <img
                  style={{ width: '185px' }}
                  src={
                    person.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                  }
                  alt={person.name}
                />
                <p>{person.name}</p>
                <p>Character: {person.character}</p>
              </li>
            ))
          ) : (
            <NotFoundView text="No information about the actors" />
          )}
        </GridList>
      )}
    </>
  );
}
