import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const SharedLayout = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </nav>
  );
};

export default SharedLayout;
