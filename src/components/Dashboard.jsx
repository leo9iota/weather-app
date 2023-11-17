import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  // Function to handle the search action
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6cf4c0e92a0fbc2c27dd98c2d19120d9&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const handleSearchBarOnChange = (event) => {
    setCity(event.target.value);
  };

  // Function to format date and time
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
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ height: '100%', padding: 2 }}>
          {/* Search component */}
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginBottom: 2 }}
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              handleSearch(); // Execute search when form is submitted
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value={city}
              onChange={handleSearchBarOnChange}
              placeholder='Search location'
              inputProps={{ 'aria-label': 'search location' }}
            />
            <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Weather info component */}
          {weather && (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Typography variant='h3' component='h3'>
                  {weather.name}
                </Typography>
                <Typography variant='h4' component='h4'>
                  {formatDate(weather.dt)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6' component='h6' sx={{ fontWeight: 'medium' }}>
                  {formatTime(weather.dt)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h4' component='h4' sx={{ fontWeight: 'medium' }}>
                  {weather.main.temp.toFixed(1)}°C
                </Typography>
                <Typography variant='h6' component='h6' sx={{ fontWeight: 'medium' }}>
                  {weather.main.temp_min.toFixed(1)}°C / {weather.main.temp_max.toFixed(1)}
                  °C - {isDayTime(weather.sys.sunrise, weather.sys.sunset, weather.dt)}
                </Typography>
              </Grid>
            </Grid>
          )}
          {/* Other weather information */}
        </Paper>
      </Grid>
      <Grid item xs={6} container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ height: '60%', padding: 2 }}>
            {/* Content for the right top card */}
            <Typography variant='h6' component='h2'>
              Overview
            </Typography>
            {/* Other details here */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ height: '40%', padding: 2 }}>
            {/* Content for the right bottom card */}
            <Typography variant='h6' component='h2'>
              Weather Forecast
            </Typography>
            {/* Forecast details here */}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
