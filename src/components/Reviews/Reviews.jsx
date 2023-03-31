import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/themoviedbApi';

import { Loader } from 'components/Loader/Loader';

import { ReviewListContainer, ReviewListContainerItem } from './Reviews.styled';


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
        setMovieReviews(response.results);
      } catch (error) {
        setError(error.message);
        console.log('getMovieReviews:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviewsFromApi(movieId);
  }, [movieId]);

  console.log(movieId);
  console.log('movieReviews:', movieReviews);

  return (
    <div>
      {isLoading && <Loader />}

      {error && <p>Something went wrong! Please try again!</p>}

      {movieReviews.length === 0 && <p>No reviews found</p>}
      <ReviewListContainer>
        {movieReviews.length > 0 &&
          movieReviews.map(review => {
            return (
              <ReviewListContainerItem key={review.id}>
                <h4>Review by: {review.author}</h4>
                <p>{review.content}</p>
              </ReviewListContainerItem>
            );
          })}
      </ReviewListContainer>
    </div>
  );
};

export default Reviews;
