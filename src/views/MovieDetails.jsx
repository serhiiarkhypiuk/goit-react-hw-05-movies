import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as api from '../services/movies-api';
import styles from '../components/SharedLayout/SharedLayout.module.css';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <PageHeading text={movie.title} />

          <button onClick={() => navigate(-1)}>Go back</button>

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
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
}
