import PageHeading from 'components/PageHeading/PageHeading';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/movies-api';
import GridList from 'components/GridList/GridList';

export default function Home() {
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
              <Link to={`/goit-react-hw-05-movies/movies/${movie.id}`}>
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
