// Dashboard.jsx
import React, { useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Overview from './Overview';
import Forecast from './Forecast';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('');

  // Access the API key safely through environment variables
  const apiKey = '9308bf1b53ae61108fe9c912a6e647d5';

  const handleSearch = () => {
    // Prepare the URLs for the API calls
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}&units=metric`;

    // Make both API calls in parallel
    Promise.all([axios.get(weatherUrl), axios.get(forecastUrl)])
      .then((responses) => {
        // The first response is from the general weather data
        setWeatherData(responses[0].data);

        // The second response is from the forecast data
        setForecastData(responses[1].data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  };

  const handleSearchBarOnChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ mt: 2, mx: 'auto', maxWidth: 'lg' }}>
        <Grid container spacing={2}>
          {/* Search Bar and Weather Display */}
          <Grid item xs={12} md={7} lg={8}>
            <Paper
              elevation={3}
              sx={{
                height: '100%',
                padding: 2,
                mx: 2,
                mr: { xs: 2, md: 0 },
              }}
            >
              <SearchBar
                city={city}
                onCityChange={handleSearchBarOnChange}
                onSearch={handleSearch}
              />
              {weatherData && <WeatherDisplay weatherData={weatherData} />}
            </Paper>
          </Grid>

          {/* Overview */}
          <Grid item xs={12} md={5} lg={4}>
            <Paper
              elevation={3}
              sx={{
                padding: 0,
                mx: 2,
                ml: { xs: 2, md: 0 },
              }}
            >
              {weatherData !== null && <Overview weatherData={weatherData} />}
            </Paper>
          </Grid>

          {/* Forecast */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 0, mx: 2 }}>
              <Forecast forecastData={forecastData} weatherData={weatherData} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: '500px' }}></Box> {/* Bottom spacing */}
    </>
  );
};

export default Dashboard;

