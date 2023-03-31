import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/themoviedbApi';

import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMoviesFromApi = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
        console.log(response.results);
      } catch (error) {
        setError(error.message);
        console.log('getTrendingMovies error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMoviesFromApi();
  }, []);

  console.log("Homepage error:", error);

  return (
    <div>
      {isLoading && <Loader />}

      {error && <p>HOMEPAGE Something went wrong! Please try again!</p>}

      <MovieList movies={trendingMovies} title={'Trending today'} />
    </div>
  );
};

export default HomePage;
