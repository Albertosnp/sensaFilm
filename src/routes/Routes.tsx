import { Layout } from '@/components/Layout/Layout';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() =>
  import('@/features/home').then((module) => ({
    default: module.Home,
  }))
);
const About = lazy(() =>
  import('@/features/about').then((module) => ({
    default: module.About,
  }))
);

export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<Layout />}>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
