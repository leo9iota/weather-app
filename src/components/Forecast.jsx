import React, { useRef, useState, useEffect } from 'react';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { weatherSymbols } from './weatherMappings'; // Import your mappings
import { useThemeContext } from './ThemeContext'; // Import the ThemeContext hook

function Forecast({ forecastData, weatherData }) {
  const swiperRef = useRef(null);
  const [weatherIcons, setWeatherIcons] = useState([]);
  const { currentTheme } = useThemeContext(); // Use the theme context
  const isDarkTheme = currentTheme === 'dark'; // Determine if the current theme is dark

  useEffect(() => {
    if (forecastData && forecastData.list) {
      const icons = forecastData.list.map((item) => {
        const iconCode = item.weather[0].icon;
        const symbol = weatherSymbols[iconCode] || weatherSymbols.default;
        return require(`../images/symbols/${symbol}.svg`); // Adjust this path to your SVG files
      });
      setWeatherIcons(icons);
    }
  }, [forecastData]);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const frostedGlassStyle = {
    backdropFilter: 'blur(10px)',
    backgroundColor: isDarkTheme ? 'rgba(22, 22, 31, 0.6)' : 'rgba(190, 190, 190, 0.6)', // Adjust for dark theme if needed
    borderRadius: '15px',
    padding: '10px',
    margin: '5px',
    boxShadow: 'none',
    color: isDarkTheme ? 'white' : 'black', // Adjust for dark theme if needed
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, position: 'relative', paddingLeft: 4, paddingRight: 4 }}>
      <Typography variant='h2' component='h2' sx={{ marginBottom: 2 }}>
        {weatherData?.name} Forecast
      </Typography>

      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        onClick={goPrev}
      >
        <ArrowBackIosNewRoundedIcon />
      </IconButton>

      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {forecastData && forecastData.list ? (
          forecastData.list.slice(0, 24).map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={frostedGlassStyle}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='body1' sx={{ fontWeight: 'bold', userSelect: 'none' }}>
                    {new Date(item.dt * 1000).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Typography>
                  <Box sx={{ width: '100px', height: '100px', margin: 'auto' }}>
                    {' '}
                    {/* Image container with fixed size */}
                    <img
                      src={weatherIcons[index]}
                      alt={item.weather[0].description}
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </Box>
                  <Typography variant='body2' sx={{ userSelect: 'none' }}>
                    {item.weather[0].description}
                  </Typography>
                  <Typography variant='body2' sx={{ userSelect: 'none' }}>
                    {`${item.main.temp_min.toFixed(1)}°C / ${item.main.temp_max.toFixed(1)}°C`}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))
        ) : (
          <Typography>No forecast available</Typography>
        )}
      </Swiper>

      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        onClick={goNext}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </Paper>
  );
}

export default Forecast;
