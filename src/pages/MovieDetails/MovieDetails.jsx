import React, { useState, useEffect, Suspense } from 'react';
// import { Suspense } from 'react';
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { getMovieById } from '../../services/themoviedbApi';

import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movieById, setMovieById] = useState([]);
const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const getMovieByIdFromApi = async (movieId) => {
      try {
        setIsLoading(true);
        const response = await getMovieById(movieId);
        setMovieById(response.results);
      } catch (error) {
        setError(error.message);
        console.log('getMovieById:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByIdFromApi();
  }, [movieId]);

  return (
    <div>
      <div>
        <NavLink to={goBackLink}>Go back</NavLink>
      </div>
      <div>
        {isLoading && <Loader />}

        {error !== 0 && <p>Something went wrong! Please try again!</p>}
        
        {movieById && <MovieCard movie={movieById} />}

        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
