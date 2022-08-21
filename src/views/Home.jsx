import PageHeading from 'components/PageHeading/PageHeading';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as api from '../services/movies-api';
import GridList from 'components/GridList/GridList';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.fetchTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today:" />

      {movies && (
        <GridList>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
              <hr />
            </li>
          ))}
        </GridList>
      )}
    </>
  );
}
