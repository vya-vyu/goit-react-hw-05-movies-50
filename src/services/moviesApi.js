// 71607835e81913adcb88d2b7747ce54e

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '71607835e81913adcb88d2b7747ce54e';

export const getTrendingMovies = () => {
  return axios
    .get('trending/all/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data.results);
};
export const getMovieDetails = id => {
  return axios
    .get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieCast = id => {
  return axios
    .get(`movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data.cast);
};
export const getMovieReviews = id => {
  return axios
    .get(`movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data.results);
};
