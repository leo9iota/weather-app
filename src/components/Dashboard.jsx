// Dashboard.jsx
import React, { useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Overview from './Overview';
import Forecast from './Forecast';

function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('');

  // Access the API key safely through environment variables
  // const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const apiKey = '9308bf1b53ae61108fe9c912a6e647d5';

  // Function to handle the search action
  const handleSearch = () => {
    // Fetch general weather data
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);

        // Fetch forecast data
        return axios.get(
          `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}&units=metric`
        );
      })
      .then((response) => {
        setForecastData(response.data);
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
      <Box sx={{ mt: 2, mx: 'auto', maxWidth: 1280 }}>
        <Grid container spacing={2}>
          {/* Search Bar and Weather Display */}
          <Grid item xs={12} md={7} lg={8}>
            <Paper elevation={3} sx={{ height: '100%', padding: 2, mx: 2, mr: 0 }}>
              <SearchBar
                city={city}
                onCityChange={handleSearchBarOnChange}
                onSearch={handleSearch}
              />
              {weatherData && <WeatherDisplay weather={weatherData} />}
            </Paper>
          </Grid>

          {/* Overview */}
          <Grid item xs={12} md={5} lg={4}>
            <Paper elevation={3} sx={{ padding: 0, mx: 2, ml: 0 }}>
              <Overview weatherData={weatherData} />
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
    </>
  );
}

export default Dashboard;
