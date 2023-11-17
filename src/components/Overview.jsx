// Overview.jsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

function Overview() {
  return (
    <Paper elevation={3} sx={{ height: '60%', padding: 2 }}>
      {/* Content for the right top card */}
      <Typography variant='h6' component='h2'>
        Overview
      </Typography>
      {/* Other details here */}
    </Paper>
  );
}

export default Overview;
