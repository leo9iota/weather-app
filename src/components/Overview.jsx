import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

function Overview({ weatherData }) {
  // Function to format the timestamp into a readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // or false if you want 24-hour time
    });
  };

  return (
    <Paper elevation={3} sx={{ height: '60%', padding: 2 }}>
      <Typography variant='h6' component='h2'>
        {weatherData?.name} Overview
      </Typography>
      {weatherData && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='body1'>
              Weather Description: {weatherData.weather[0].main} ({weatherData.weather[0].description})
            </Typography>
            <Typography variant='body1'>Feels Like: {weatherData.main.feels_like}°C</Typography>
            <Typography variant='body1'>Cloudiness: {weatherData.clouds.all}%</Typography>
            <Typography variant='body1'>Pressure: {weatherData.main.pressure} hPa</Typography>
            <Typography variant='body1'>Humidity: {weatherData.main.humidity}%</Typography>
            <Typography variant='body1'>Visibility: {weatherData.visibility / 1000} km</Typography>
            <Typography variant='body1'>Wind Speed: {weatherData.wind.speed} m/s</Typography>
            <Typography variant='body1'>Wind Direction: {weatherData.wind.deg}°</Typography>
            <Typography variant='body1'>Sunrise: {formatTime(weatherData.sys.sunrise)}</Typography>
            <Typography variant='body1'>Sunset: {formatTime(weatherData.sys.sunset)}</Typography>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}

export default Overview;
