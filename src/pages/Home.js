import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import MovieList from '../components/MovieList';
import MoviesCarousel from '../components/MoviesCarousel';

import { fetchAllMovies } from '../service/movies';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        {popularMovies && topRatedMovies && upComingMovies && (
          <Box sx={{ py: 12 }}>
            {/* Peliculas más populares */}
            <MovieList
              title="Más populares"
              subTitle="Nullan sapien arcu tempor"
            >
              <MoviesCarousel movies={popularMovies} loading={loading} />
            </MovieList>

            {/* Peliculas mejor evaluadas */}
            <MovieList
              title="Mejor evaluadas"
              subTitle="Phasellus mi urna euismod"
            >
              <MoviesCarousel movies={topRatedMovies} loading={loading} />
            </MovieList>

            {/* Próximos estrenos*/}
            <MovieList
              title="Próximos estrenos"
              subTitle="Morbi ac turpis lacus"
            >
              <MoviesCarousel movies={upComingMovies} loading={loading} />
            </MovieList>
          </Box>
        )}
      </Container>
    </>
  );
}
