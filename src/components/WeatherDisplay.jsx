import React from 'react';
import { Box, Typography } from '@mui/material';
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
      hour12: true,
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
        justifyContent: 'space-between', // Align children top and bottom
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
      {/* Top section for the city and exact date on the left, current time on the right */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6'>
          {weather.name}, {formatDate(weather.dt)}
        </Typography>
        <Typography variant='h6'>{formatTime(weather.dt)}</Typography>
      </Box>

      {/* Bottom section for the current temperature on the left, weather symbol on the right */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant='h2' component='div'>
            {weather.main.temp.toFixed(1)}°C
          </Typography>
          <Typography variant='body1' component='div'>
            {weather.main.temp_min.toFixed(1)}°C / {weather.main.temp_max.toFixed(1)}°C
          </Typography>
          <Typography variant='body2' component='div'>
            {isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt)}
          </Typography>
        </Box>
        <Box
          component='img'
          src={weatherSymbol}
          sx={{
            position: 'absolute',
            bottom: -110,
            right: -100,
            height: 'auto',
            width: '450px',
          }}
        />
      </Box>
    </Box>
  );
}

export default WeatherDisplay;
