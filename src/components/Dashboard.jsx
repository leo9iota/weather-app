// Dashboard.jsx
import React, { useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Overview from './Overview';
import Forecast from './Forecast';
// import ThemeToggle from './ThemeToggle';

function Dashboard({ onToggleTheme }) {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  
  // Access the API key safely through environment variables
  const apiKey = process.env.REACT_APP_API_KEY;

  // Function to handle the search action
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
    <>
      <NavBar />
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ height: '100%', padding: 2 }}>
              <SearchBar
                city={city}
                onCityChange={handleSearchBarOnChange}
                onSearch={handleSearch}
              />
              {weather && (
                <WeatherDisplay
                  weather={weather}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  isDayTime={isDayTime}
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={6} container spacing={2}>
            <Grid item xs={12}>
              <Overview />
            </Grid>
            <Grid item xs={12}>
              <Forecast />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
