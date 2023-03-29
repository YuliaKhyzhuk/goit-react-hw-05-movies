import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'f687d24021b781b06892bcf3760eb617';
const LANGUAGE = 'en-US';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day`, {
    params: { api_key: API_KEY, language: LANGUAGE, },
  });

  console.log('getTrendingMovies:', response);
  const { data } = response;

  return data;
};

export const getMovieByQuery = async (query, page = 1) => {
    const response = await axios.get(`/search/movie`, {
      params: { api_key: API_KEY, language: LANGUAGE, page, query, },
    });
  
    console.log('getMovieById response:', response);
    const { data } = response;
    return data;
  };

export const getMovieById = async movieId => {
    const response = await axios.get(`/movie/${movieId}`, {
      params: { api_key: API_KEY, language: LANGUAGE},
    });
  
    console.log('getMovieById response:', response);
    const { data } = response;
    return data;
  };

export const getMovieCredits = async movieId => {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: { api_key: API_KEY, language: LANGUAGE, },
    });
  
    console.log('getMovieCredits response:', response);
    const { data } = response;
    return data;
  };


export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: { api_key: API_KEY, language: LANGUAGE, page: 1 },
  });

  console.log('getMovieReviews response:', response);
  const { data } = response;
  return data;
  // console.log("getMovieReviews data:", data);
  // console.log(data);
};
