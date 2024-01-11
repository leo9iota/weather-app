import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import moment from 'moment-timezone';
import { backgroundImages, weatherSymbols } from './weatherMappings';

function WeatherDisplay({ weatherData }) {
  // States for background and icon
  const [background, setBackground] = useState('default');
  const [icon, setIcon] = useState('default');

  // States for dynamically loaded images
  const [backgroundImagePath, setBackgroundImagePath] = useState(null);
  const [weatherSymbolPath, setWeatherSymbolPath] = useState(null);

  // Effect hook to update the background state when weatherData changes
  useEffect(() => {
    const weatherIconCode = weatherData?.weather?.[0]?.icon;
    if (weatherIconCode) {
      const newBackground = backgroundImages[weatherIconCode] || backgroundImages.default;
      const newIcon = weatherSymbols[weatherIconCode] || weatherSymbols.default;
      setBackground(newBackground);
      setIcon(newIcon);
    }
  }, [weatherData]);

  // Dynamic imports for images based on the state
  useEffect(() => {
    // Dynamic import for the background image
    if (background) {
      import(`../images/backgrounds/${background}.svg`)
        .then((module) => setBackgroundImagePath(module.default))
        .catch((error) => console.error(`Failed to load background image: ${error}`));
    }
  }, [background]);

  useEffect(() => {
    // Dynamic import for the weather symbol
    if (icon) {
      import(`../images/symbols/${icon}.svg`)
        .then((module) => setWeatherSymbolPath(module.default))
        .catch((error) => console.error(`Failed to load weather symbol: ${error}`));
    }
  }, [icon]);

  // Function to format date
  const formatDate = (timestamp) => {
    const localTime = moment.unix(timestamp).tz(moment.tz.guess());
    const weekday = localTime.format('dddd');
    const dateStr = localTime.format('MMMM D, YYYY');
    return { weekday, dateStr };
  };

  // Function to format time
  const formatTime = (timezoneOffset) => {
    const cityTime = moment.utc().add(timezoneOffset, 'seconds');
    return cityTime.format('HH:mm');
  };

  // Function to determine if it's day time
  const isDayTime = (sunrise, sunset, currentTime) => {
    const current = moment.unix(currentTime);
    const sunriseTime = moment.unix(sunrise);
    const sunsetTime = moment.unix(sunset);
    return current.isBetween(sunriseTime, sunsetTime);
  };

  // Extracted date and time information using formatDate and formatTime functions
  const { weekday, dateStr } = formatDate(weatherData.dt);
  const time = formatTime(weatherData.timezone);
  const theme = useTheme();

  // Determining if it's day or night to set the appropriate icon
  const dayTimeIcon = isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.dt) ? (
    <WbSunnyIcon style={{ color: theme.palette.warning.main }} />
  ) : (
    <NightsStayIcon />
  );

  const dayTimeText = isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.dt)
    ? 'Day'
    : 'Night';

  return (
    <Paper elevation={3} sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '319px',
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          p: 0,
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

        {/* Bottom section for temperature and weather icon */}
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.5 }}
          >
            <Typography variant='h1' component='div' sx={{ fontSize: '3rem' }}>
              {weatherData.main.temp.toFixed(1)}°C
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {dayTimeIcon}
              <Typography variant='subtitle1' sx={{ ml: 1, fontSize: '1.25rem' }}>
                {dayTimeText}
              </Typography>
              <FiberManualRecordIcon fontSize='small' sx={{ fontSize: '0.5rem', mx: 1 }} />
              <Typography variant='body1' sx={{ fontSize: '1.25rem' }}>
                {weatherData.main.temp_min.toFixed(1)}°C / {weatherData.main.temp_max.toFixed(1)}°C
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: -15,
              height: '250px',
              width: 'auto',
              transform: 'translate(0, 0)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
            component='img'
            src={weatherSymbolPath}
            draggable='false'
          />
        </Box>
      </Box>
    </Paper>
  );
}

export default WeatherDisplay;
