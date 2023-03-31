import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import {
  NavContainer,
  HomeNavLinkContainer,
  HomeNavLink,
  MoviesNavLink,
  MoviesLinkContainer,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <NavContainer>
        <HomeNavLinkContainer>
          <HomeNavLink to="/">Home</HomeNavLink>
        </HomeNavLinkContainer>
        <MoviesLinkContainer>
          <MoviesNavLink to="/movies">Movies</MoviesNavLink>
        </MoviesLinkContainer>
      </NavContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
