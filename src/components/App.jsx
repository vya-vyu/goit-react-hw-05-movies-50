import HeaderNav from './HeaderNav/HeaderNav';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Movies from 'pages/Movies';
import HomePage from 'pages/HomePage';
import MovieDescription from './MovieDescription/MovieDescription';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const MainLayout = () => {
  return (
    <>
      <HeaderNav />

      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
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
    </div>
  );
};
