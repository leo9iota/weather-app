import React from 'react';
import { Paper, Typography, Grid, Divider, useTheme } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat'; // For temperature
import OpacityIcon from '@mui/icons-material/Opacity'; // For humidity
import AirIcon from '@mui/icons-material/Air'; // For wind speed
import Brightness5Icon from '@mui/icons-material/Brightness5'; // For sunrise
import Brightness4Icon from '@mui/icons-material/Brightness4'; // For sunset

function Overview({ weatherData }) {
  const theme = useTheme(); // Accessing the theme

  // Function to format the timestamp into a readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  // Style for the dividers
  const dividerStyle = {
    backgroundColor: theme.palette.divider, // Use theme.palette.divider for the default divider color
    margin: '8px 0',
    width: '100%', // Ensure full width
  };

  // Dynamic icon color based on theme mode
  const iconColor = theme.palette.mode === 'dark' ? 'white' : 'black';

  return (
    <Paper elevation={3} sx={{ padding: 2, color: theme.palette.text.primary }}>
      <Typography variant='h2' component='h2' sx={{ marginBottom: 2 }}>
        {weatherData?.name} Overview
      </Typography>
      {weatherData && (
        <Grid container spacing={2}>
          <Grid item xs={12} container>
            <Grid item xs={6} container alignItems='center'>
              <ThermostatIcon sx={{ color: iconColor }} />
              <Typography variant='body1' sx={{ ml: 1 }}>
                Feels Like
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign='right'>
              <Typography variant='body1'>{weatherData.main.feels_like}°C</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={dividerStyle} />
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6} container alignItems='center'>
              <OpacityIcon sx={{ color: iconColor }} />
              <Typography variant='body1' sx={{ ml: 1 }}>
                Humidity
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign='right'>
              <Typography variant='body1'>{weatherData.main.humidity}%</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={dividerStyle} />
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6} container alignItems='center'>
              <AirIcon sx={{ color: iconColor }} />
              <Typography variant='body1' sx={{ ml: 1 }}>
                Wind Speed
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign='right'>
              <Typography variant='body1'>{weatherData.wind.speed} m/s</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={dividerStyle} />
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6} container alignItems='center'>
              <Brightness5Icon sx={{ color: iconColor }} />
              <Typography variant='body1' sx={{ ml: 1 }}>
                Sunrise
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign='right'>
              <Typography variant='body1'>{formatTime(weatherData.sys.sunrise)}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={dividerStyle} />
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6} container alignItems='center'>
              <Brightness4Icon sx={{ color: iconColor }} />
              <Typography variant='body1' sx={{ ml: 1 }}>
                Sunset
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign='right'>
              <Typography variant='body1'>{formatTime(weatherData.sys.sunset)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}

export default Overview;
