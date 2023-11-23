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
      hour12: false, // Changed to 24-hour format
    });
  };

  const { weekday, dateStr } = formatDate(weather.dt);
  const time = formatTime(weather.dt);

  const isDayTime = (sunrise, sunset, currentTime) => {
    return currentTime >= sunrise && currentTime < sunset;
  };

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
        justifyContent: 'space-between',
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
          <Typography variant='subtitle2'>{dateStr}</Typography>
          <Typography variant='subtitle2'>{weekday}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon />
          <Typography variant='h6'>{time}</Typography>
        </Box>
      </Box>

      {/* Bottom section for temperature */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: theme.spacing(2),
          width: '100%',
          px: theme.spacing(2),
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
          <Typography variant='h2' component='div'>
            {weather.main.temp.toFixed(1)}°C
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }}>
              {weather.main.temp_min.toFixed(1)}°C
            </Typography>
            <FiberManualRecordIcon fontSize='small' sx={{ fontSize: '0.5rem', margin: '0 8px' }} />
            <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }}>
              {weather.main.temp_max.toFixed(1)}°C
            </Typography>
            {dayTimeIcon}
            <Typography variant='caption' sx={{ ml: 1 }}>
              {dayTimeText}
            </Typography>
          </Box>
        </Box>
        <Box
          component='img'
          src={weatherSymbol}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: '150px', // Adjust size accordingly
            width: 'auto',
          }}
        />
      </Box>
    </Box>
  );
}

export default WeatherDisplay;
