import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    loading: true,
  },
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
  setLoading,
} = movieSlice.actions;

export default movieSlice.reducer;
