import React from 'react';
import { Grid, Typography } from '@mui/material';
import backgroundImage from '../images/background/png/rain-day.png'; // Replace with the actual path to your image

function WeatherDisplay({ weather }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const isDayTime = (sunrise, sunset, currentTime) => {
    return currentTime >= sunrise && currentTime < sunset ? 'Day' : 'Evening';
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '4px', // Rounded corners
        overflow: 'hidden', // Ensures the background adheres to the border radius
        width: '100%', // Match the width with the Overview component
      }}
    >
      <Grid item xs={6}>
        <Typography variant='h2' component='h2'>
          {weather.name}
        </Typography>
        <Typography variant='h6' component='h6'>
          {formatDate(weather.dt)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h6' component='h6' sx={{ fontWeight: 'medium' }}>
          {formatTime(weather.dt)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h1' component='h1' sx={{ fontWeight: 'medium' }}>
          {weather.main.temp.toFixed(1)}°C
        </Typography>
        <Typography variant='h1' component='h1' sx={{ fontWeight: 'medium' }}>
          {weather.main.temp_min.toFixed(1)}°C / {weather.main.temp_max.toFixed(1)}°C -{' '}
          {isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt)}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default WeatherDisplay;
