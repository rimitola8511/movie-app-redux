import {
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
  setLoading,
} from '../../store/slices/movies';
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from './api';
export const fetchAllMovies = () => async (dispatch) => {
  try {
    setTimeout(async () => {
      const [popularMovies, topRatedMovies, upComingMovies] = await Promise.all(
        [getPopularMovies(), getTopRatedMovies(), getUpComingMovies()]
      );
      dispatch(setPopularMovies(popularMovies));
      dispatch(setTopRatedMovies(topRatedMovies));
      dispatch(setUpComingMovies(upComingMovies));
      dispatch(setLoading(false));
    }, 1000);
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};
