import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const HeaderNav = lazy(() => import('./HeaderNav/HeaderNav'));
const MovieDescription = lazy(() =>
  import('./MovieDescription/MovieDescription')
);
const Movies = lazy(() => import('pages/Movies'));
const HomePage = lazy(() => import('pages/HomePage'));

const MainLayout = () => {
  return (
    <>
      <HeaderNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDescription />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
