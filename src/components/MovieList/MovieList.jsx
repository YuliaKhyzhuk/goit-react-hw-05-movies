import React from 'react';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import { MovieListTitle, ContainerMovieList, MovieListContainerItem, MovieListItemLink } from './MovieList.styled';

export const MovieList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <div>
      {title && <MovieListTitle>{title}</MovieListTitle>}
      <ContainerMovieList>
        {movies?.length &&
          movies.map(movie => {
            return (
              <MovieListContainerItem key={movie.id}>
                <MovieListItemLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </MovieListItemLink>
              </MovieListContainerItem>
            );
          })}
      </ContainerMovieList>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default MovieList;
