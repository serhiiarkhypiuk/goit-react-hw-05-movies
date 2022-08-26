import PageHeading from 'components/PageHeading/PageHeading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import * as api from '../services/movies-api';
import GridList from 'components/GridList/GridList';

export default function MoviesView() {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (movieQuery.trim() === '') {
      return;
    }

    function fetchMovies() {
      api
        .fetchMovie(movieQuery)
        .then(data => setMovies(data.results))
        .then(
          navigate({
            ...location,
            search: `query=${movieQuery}`,
          })
        );
    }

    fetchMovies();
  }, [movieQuery]);

  useEffect(() => {
    const queryBySearch =
      new URLSearchParams(location.search).get('query') ?? '';
    if (queryBySearch) {
      setMovieQuery(queryBySearch);
    }
  }, [navigate, location]);

  function onSearchQuery(movieQuery) {
    setMovies([]);
    setMovieQuery(movieQuery);
  }

  return (
    <>
      <PageHeading text="Movies" />
      <SearchBar onSubmit={onSearchQuery} />

      {movies && (
        <GridList>
          {movies.length !== 0 &&
            movies.map(movie => (
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
