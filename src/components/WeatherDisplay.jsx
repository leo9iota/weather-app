import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // icon for location
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // icon for current time
import NightsStayIcon from '@mui/icons-material/NightsStay'; // icon for night time
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // icon for day time
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // icon for separator
import backgroundImage from '../images/backgrounds/rain-day.svg';
import weatherSymbol from '../images/symbols/clear-day.svg';

function WeatherDisplay({ weather }) {
  const theme = useTheme();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return {
      day: date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };
  };

  const dateTime = formatDate(weather.dt);

  const isDayTime = (sunrise, sunset, currentTime) => {
    return currentTime >= sunrise && currentTime < sunset;
  };

  const dayTimeStatus = isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt) ? (
    <WbSunnyIcon style={{ color: theme.palette.warning.main }} />
  ) : (
    <NightsStayIcon />
  );

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
      {/* Top section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnIcon />
          <Box>
            <Typography variant='h6'>{weather.name}</Typography>
            <Typography variant='subtitle2'>{dateTime.day}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon />
          <Typography variant='h6'>{dateTime.time}</Typography>
        </Box>
      </Box>
      {/* Bottom section */}
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant='h2' component='div' sx={{ lineHeight: 1 }}>
            {weather.main.temp.toFixed(1)}°C
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant='body1'
              component='div'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {weather.main.temp_min.toFixed(1)}
              <FiberManualRecordIcon fontSize='small' sx={{ mx: 1 }} />
              {weather.main.temp_max.toFixed(1)}°C
            </Typography>
            {dayTimeStatus}
          </Box>
        </Box>
        <Box
          component='img'
          src={weatherSymbol}
          sx={{
            position: 'absolute',
            bottom: -70,
            right: -50,
            height: 'auto',
            width: '350px',
          }}
        />
      </Box>
    </Box>
  );
}

export default WeatherDisplay;
