import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import backgroundImage from '../images/backgrounds/rain-day.svg';
import weatherSymbol from '../images/symbols/clear-day.svg';

function WeatherDisplay({ weatherData }) {
  const theme = useTheme();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return { weekday, dateStr };
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  const { weekday, dateStr } = formatDate(weatherData.dt);
  const time = formatTime(weatherData.dt);

  const isDayTime = (sunrise, sunset, currentTime) => {
    return currentTime >= sunrise && currentTime < sunset;
  };

  const dayTimeIcon = isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.dt) ? (
    <WbSunnyIcon style={{ color: theme.palette.warning.main }} />
  ) : (
    <NightsStayIcon />
  );

  const dayTimeText = isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.dt)
    ? 'Day'
    : 'Night';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '319px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        p: 0,
        borderRadius: 2,
        overflow: 'hidden',
        boxSizing: 'border-box',
        color: 'white',
        textShadow: '1px 1px 2px black',
        position: 'relative',
      }}
    >
      {/* Top section for location and time */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', p: 2 }}
      >
        {' '}
        {/* Padding added here */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon />
            {weatherData.name}
          </Typography>
          <Typography variant='subtitle2'>{weekday}</Typography>
          <Typography variant='subtitle2'>{dateStr}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon />
          <Typography variant='h6'>{time}</Typography>
        </Box>
      </Box>

      {/* Bottom section for temperature */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          pt: 0,
          pb: 2,
          pl: 2,
          pr: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.5 }}>
          <Typography variant='h1' component='div' sx={{ fontSize: '3rem' }}>
            {' '}
            {/* Increased font size */}
            {weatherData.main.temp.toFixed(1)}°C
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {dayTimeIcon}
            <Typography variant='subtitle1' sx={{ ml: 1, fontSize: '1.25rem' }}>
              {' '}
              {/* Increased font size */}
              {dayTimeText}
            </Typography>
            <FiberManualRecordIcon fontSize='small' sx={{ fontSize: '0.5rem', mx: 1 }} />
            <Typography variant='body1' sx={{ fontSize: '1.25rem' }}>
              {' '}
              {/* Increased font size */}
              {weatherData.main.temp_min.toFixed(1)}°C / {weatherData.main.temp_max.toFixed(1)}°C
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: -70,
            right: -70,
            height: '350px',
            width: 'auto',
            transform: 'translate(0, 0)',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          component='img'
          src={weatherSymbol}
          draggable='false'
        />
      </Box>
    </Box>
  );
}

export default WeatherDisplay;
