import styles from './SharedLayout.module.css';
import Container from '../Container/Container';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <Container>
      <header className={styles.header}>
        <nav>
          <NavLink
            to="/goit-react-hw-05-movies/"
            className={navData =>
              navData.isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/goit-react-hw-05-movies/movies"
            className={navData =>
              navData.isActive ? styles.activeLink : styles.link
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
