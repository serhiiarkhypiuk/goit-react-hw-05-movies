import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails'));
// const NotFound = lazy(() => import('../views/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" />}
          // element={<NotFound text="404 We can't find such page" />}
        ></Route>
      </Route>
    </Routes>
  );
};
