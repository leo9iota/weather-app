import React from 'react';
import { Paper, Typography } from '@mui/material';

function Forecast() {
  return (
    <Paper elevation={3} sx={{ height: '40%', padding: 2 }}>
      {/* Content for the right bottom card */}
      <Typography variant='h6' component='h2'>
        Weather Forecast
      </Typography>
      {/* Forecast details here */}
    </Paper>
  );
}

export default Forecast;
