import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';

import Layout from 'layout/Layout/Layout';
import { MainPage } from 'pages/MainPage';
import { DrinksPage } from 'pages/DrinksPage';
import { AddCocktailPage } from 'pages/AddCocktailPage';
import { MyCocktailPage } from 'pages/MyCocktailPage ';
import { FavoriteCocktailPage } from 'pages/FavoriteCocktailPage';
import { ErrorPage } from 'pages/ErrorPage';

// const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="add" element={<AddCocktailPage />} />
        <Route path="my" element={<MyCocktailPage />} />
        <Route path="favorite" element={<FavoriteCocktailPage />} />
        <Route path="error" element={<ErrorPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Route>
    </Routes>
  );
};
