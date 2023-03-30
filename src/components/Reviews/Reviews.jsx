import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/themoviedbApi';

import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;
    
        const getMovieReviewsFromApi = async movieId => {
          try {
            setIsLoading(true);
            const response = await getMovieReviews(movieId);
            // setMovieById(response.results);
            setMovieReviews(response);
          } catch (error) {
            setError(error.message);
            console.log('getMovieReviews:', error.message);
          } finally {
            setIsLoading(false);
          }
        };
        getMovieReviewsFromApi();
      }, [movieId]);

      return (
        <div>
          {isLoading && <Loader />}
    
          {error !== 0 && <p>Something went wrong! Please try again!</p>}

          {movieReviews.length === 0 && <p>No reviews found</p>}
          <ul>
            {movieReviews.length > 0 && movieReviews.map(review => {
                return(
                    <li key={review.id}>
                        <h4>Review by: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                )
            })}
          </ul>
        </div>
      );
    
}

export default Reviews;
