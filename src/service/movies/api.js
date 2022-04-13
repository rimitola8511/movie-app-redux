import instance from '../../plugins/axios';
import { normalizeMoviesResponse } from '../../helpers/normalizeMoviesResponse';

export const getPopularMovies = async () => {
  const { data } = await instance.get('/popular', {
    params: {
      api_key: process.env.REACT_APP_URL_KEY,
      page: 1,
      language: 'es-CO',
    },
  });
  return normalizeMoviesResponse(data.results);
};

export const getTopRatedMovies = async () => {
  const { data } = await instance.get('/top_rated', {
    params: {
      api_key: process.env.REACT_APP_URL_KEY,
      page: 1,
      language: 'es-CO',
    },
  });
  return normalizeMoviesResponse(data.results);
};

export const getUpComingMovies = async () => {
  const { data } = await instance.get('/upcoming', {
    params: {
      api_key: process.env.REACT_APP_URL_KEY,
      page: 1,
      language: 'es-CO',
    },
  });
  return normalizeMoviesResponse(data.results);
};
