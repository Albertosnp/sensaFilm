import { Layout } from '@/components/Layout/Layout';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() =>
  import('@/features/home').then((module) => ({
    default: module.Home,
  }))
);
const DetailTv = lazy(() =>
  import('@/features/detailTv').then((module) => ({
    default: module.DetailTv,
  }))
);
const DetailMovie = lazy(() =>
  import('@/features/detailMovie').then((module) => ({
    default: module.DetailMovie,
  }))
);

export const ROUTE_PATHS = {
  HOME: '/',
  TV_DETAIL: '/detailTv/:idTv',
  MOVIE_DETAIL: '/detailMovie/:idMovie',
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<Layout />}>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.TV_DETAIL} element={<DetailTv />} />
        <Route path={ROUTE_PATHS.MOVIE_DETAIL} element={<DetailMovie />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
