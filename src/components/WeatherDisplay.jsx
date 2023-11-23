import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import backgroundImage from '../images/backgrounds/rain-day.svg';
import weatherSymbol from '../images/symbols/clear-day.svg';

function WeatherDisplay({ weather }) {
  const theme = useTheme();

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
      hour12: false, // Changed to 24-hour format
    });
  };

  const isDayTime = (sunrise, sunset, currentTime) => {
    return currentTime >= sunrise && currentTime < sunset;
  };

  // Determine day/night and the corresponding icon.
  const dayTimeIcon = isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt) ? (
    <WbSunnyIcon style={{ color: theme.palette.warning.main }} />
  ) : (
    <NightsStayIcon />
  );

  const dayTimeText = isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt)
    ? 'Day'
    : 'Night';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Align children top and bottom
        minHeight: '319px',
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
      {/* Top section for location and time */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            {weather.name}
          </Typography>
          <Typography variant='subtitle2'>{formatDate(weather.dt)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon />
          <Typography variant='h6'>{formatTime(weather.dt)}</Typography>
        </Box>
      </Box>

      {/* Bottom section for temperature */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: theme.spacing(2),
          width: '100%',
          px: theme.spacing(2),
        }}
      >
        <Box>
          <Typography variant='h2' component='div' sx={{ lineHeight: 1 }}>
            {weather.main.temp.toFixed(1)}°C
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {dayTimeIcon}
            <Typography variant='caption' sx={{ ml: 1 }}>
              {dayTimeText}
            </Typography>
            <FiberManualRecordIcon fontSize='inherit' sx={{ mx: 1 }} />
            <Typography variant='body1'>
              {weather.main.temp_min.toFixed(1)}°C / {weather.main.temp_max.toFixed(1)}°C
            </Typography>
          </Box>
        </Box>
        <Box
          component='img'
          src={weatherSymbol}
          sx={{
            height: '150px', // Adjust size accordingly
            width: 'auto',
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        />
      </Box>
    </Box>
  );
}

export default WeatherDisplay;
