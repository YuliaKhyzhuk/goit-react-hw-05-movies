import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../services/themoviedbApi';
import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const getMovieByQueryFromApi = async (query) => {
      try {
        setIsLoading(true);
        const response = await getMovieByQuery(query);
        setMovies(response.results);
      } catch (error) {
        setError(error.message);
        console.log('getMovieByQuery error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByQueryFromApi();
  }, [query]);

  const handleSearchFormSubmit = query => {
    // event.preventDefault();
    // console.log('query on submit:', event.currentTarget.elements.query);
    // setSearchParams({ query: query });
    setSearchParams({ query });

  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchFormSubmit} />

      {isLoading && <Loader />}

      {error !== 0 && <p>Something went wrong! Please try again!</p>}

      {movies.length > 0 && <MovieList movies={movies} title={'Trending today'} />}

      {query && movies.length === 0 && (
        <p>No movies found! Please try another title! </p>
      )}
    </div>
  );
};

export default Movies;
