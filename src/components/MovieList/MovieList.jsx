import React from 'react';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {movies?.length &&
          movies.map(movie => {
           return (<li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>); 
          })}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})).isRequired,
};

export default MovieList;
