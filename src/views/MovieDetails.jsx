import React, { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as api from '../services/movies-api';
import styles from '../components/SharedLayout/SharedLayout.module.css';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <PageHeading text={movie.title} />

          <Link className="button" to={location.state.from}>
            Go back
          </Link>

          <div style={{ display: 'flex' }}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                marginLeft: '20px',
              }}
            >
              <p>
                <b>User score: </b>
                {movie.vote_average} from {movie.vote_count} votes
              </p>
              <p>
                <b>Overview: </b>
                {movie.overview}
              </p>
              <hr />
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'start',
                  marginLeft: '20px',
                  border: '2px solid #df2c14',
                  borderRadius: '3px',
                }}
              >
                <li>
                  <NavLink
                    to="cast"
                    className={navData =>
                      navData.isActive ? styles.activeLink : styles.link
                    }
                    state={{ from: location.state.from }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="reviews"
                    className={navData =>
                      navData.isActive ? styles.activeLink : styles.link
                    }
                    state={{ from: location.state.from }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
