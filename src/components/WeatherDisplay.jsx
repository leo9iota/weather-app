import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import backgroundImage from '../images/backgrounds/rain-day.svg';
import weatherSymbol from '../images/symbols/clear-day.svg';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '35vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        p: 2,
        borderRadius: 2,
        overflow: 'hidden',
        boxSizing: 'border-box',
        color: 'white',
        textShadow: '1px 1px 2px black',
        position: 'relative',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' gutterBottom>
            {weather.name}
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            {formatDate(weather.dt)}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {formatTime(weather.dt)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
          <Typography variant='h2' component='div'>
            {weather.main.temp.toFixed(1)}°C
          </Typography>
          <Typography variant='body1' component='div'>
            {weather.main.temp_min.toFixed(1)}°C / {weather.main.temp_max.toFixed(1)}°C
          </Typography>
          <Typography variant='body2' component='div'>
            {isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt)}
          </Typography>
        </Grid>
        {/* Additional weather details can be added here */}
      </Grid>
      <Box
        component='img'
        src={weatherSymbol}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0, // Position to the bottom-left corner
          height: '400px',
          width: 'auto',
        }}
      />
    </Box>
  );
}

export default WeatherDisplay;
