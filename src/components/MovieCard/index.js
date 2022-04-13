import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import Image from '../Image';
import MovieDetail from '../MovieDetail';

export default function MovieCard({
  title,
  releaseDate,
  backdropPath,
  posterPath,
  overview,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card sx={{ boxShadow: 'none', pr: 1 }}>
        <CardActionArea onClick={handleClickOpenDialog}>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '6px',
              mb: 2,
            }}
          >
            <Image
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${
                backdropPath || posterPath
              }`}
              alt={title}
            />
          </Box>

          <Typography
            component="h5"
            sx={{
              fontWeight: 'bold',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>
          <Typography component="p" sx={{ color: 'text.secondary' }}>
            {releaseDate}
          </Typography>
        </CardActionArea>
      </Card>
      <MovieDetail
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title={title}
        overview={overview}
        posterPath={posterPath}
      />
    </>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  backdropPath: PropTypes.string,
  posterPath: PropTypes.string,
  overview: PropTypes.string.isRequired,
};
