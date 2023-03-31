import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { getMovieById } from '../../services/themoviedbApi';

import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';

import { GoBackNavLinkContainer, GoBackNavLink, CastNavLink, CastNavLinkContainer, ReviewsNavLink, ReviewsLinkContainer } from './MovieDetails.styled';


export const MovieDetails = () => {
  const [movieById, setMovieById] = useState([]);
const { movieId } = useParams();
// console.log('kjhkj', movieId);
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
        // setMovieById(response.results);
        setMovieById(response);

      } catch (error) {
        setError(error.message);
        console.log('getMovieById:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByIdFromApi(movieId);
  }, [movieId]);

  return (
    <div>
      <GoBackNavLinkContainer>
        <GoBackNavLink to={goBackLink}>Go back</GoBackNavLink>
      </GoBackNavLinkContainer>
      <div>
        {isLoading && <Loader />}

        {error && <p>Something went wrong! Please try again!</p>}

        {movieById && <MovieCard movie={movieById} />}
        <div>
        <h3>Additional Information</h3>
        <CastNavLinkContainer>
        <CastNavLink to="cast" state={{from: goBackLink}}>Cast</CastNavLink>
        </CastNavLinkContainer>
        <ReviewsLinkContainer>
        <ReviewsNavLink to="reviews" state={{from: goBackLink}}>Reviews</ReviewsNavLink>
        </ReviewsLinkContainer>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
