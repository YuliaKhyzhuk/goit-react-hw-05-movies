import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/themoviedbApi';

import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const defaultImg = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

  useEffect(() => {
    if (!movieId) return;

    const getMovieCastFromApi = async movieId => {
      try {
        setIsLoading(true);
        const response = await getMovieCredits(movieId);
        // setMovieById(response.results);
        setMovieCast(response.cast);
      } catch (error) {
        setError(error.message);
        console.log('getMovieCredits:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCastFromApi(movieId);
  }, [movieId]);

  console.log(movieId);
  console.log("movieCast:", movieCast);

  return (
    <div>
      {isLoading && <Loader />}

      {error && <p>Something went wrong! Please try again!</p>}

      <ul>
        {movieCast.length > 0 && movieCast.map(actor => {
            // console.log("actor:", actor);
            return (
                <li key={actor.id}>
                    <h4>{actor.name}</h4>
                    <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : defaultImg} alt={actor.name} width="240px" />
                    <p>{actor.character}</p>
                </li>
            )
        })}
      </ul>
    </div>
  );
};

export default Cast;
