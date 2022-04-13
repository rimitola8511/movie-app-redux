import formatDate from './formatDate';
export const normalizeMoviesResponse = (response) => {
  return response.map((resp) => {
    const {
      id,
      title,
      release_date: releaseDate,
      backdrop_path: backdropPath,
      poster_path: posterPath,
      overview,
    } = resp;
    return {
      id,
      title,
      releaseDate: formatDate(releaseDate || null),
      backdropPath,
      posterPath,
      overview,
    };
  });
};
