import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ArrowForward } from '@mui/icons-material';

const MovieList = ({ title, subTitle, children }) => {
  return (
    <Box sx={{ mb: 8 }}>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <ArrowForward sx={{ display: 'flex' }}></ArrowForward>
        </Grid>
      </Grid>
      <Typography
        component="p"
        sx={{ color: 'text.secondary', mb: 4 }}
        role="paragraph"
      >
        {subTitle}
      </Typography>

      {children}
    </Box>
  );
};

export default MovieList;

MovieList.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};
