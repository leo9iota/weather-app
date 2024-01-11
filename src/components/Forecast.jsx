import React, { useRef, useState, useEffect } from 'react';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { weatherSymbols } from './weatherMappings';
import { useThemeContext } from './ThemeContext';
import 'swiper/css';

const Forecast = ({ forecastData, weatherData }) => {
  // Reference for the swiper component to control its behavior programmatically
  const swiperRef = useRef(null);

  // State to store weather icons
  const [weatherIcons, setWeatherIcons] = useState([]);

  // Accessing the current theme from context
  const { currentTheme } = useThemeContext();
  const isDarkTheme = currentTheme === 'dark'; // Checking if the theme is dark

  // Effect to update weather icons whenever forecast data changes
  useEffect(() => {
    if (forecastData && forecastData.list) {
      const loadIcons = async () => {
        const icons = await Promise.all(
          forecastData.list.map(async (item) => {
            const iconCode = item.weather[0].icon;
            const symbol = weatherSymbols[iconCode] || weatherSymbols.default;
            const iconModule = await import(`../images/symbols/${symbol}.svg`);
            return iconModule.default; // Use .default to get the actual module value
          })
        );
        setWeatherIcons(icons);
      };

      loadIcons();
    }
  }, [forecastData]);

  // Function to navigate to the previous slide
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to navigate to the next slide
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Styling for the frosted glass effect, adjusted based on the theme
  const frostedGlassStyle = {
    backdropFilter: 'blur(10px)',
    backgroundColor: isDarkTheme ? 'rgba(22, 22, 31, 0.6)' : 'rgba(190, 190, 190, 0.6)',
    borderRadius: '15px',
    padding: '10px',
    margin: '5px',
    boxShadow: 'none',
    color: isDarkTheme ? 'white' : 'black',
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, position: 'relative', paddingLeft: 4, paddingRight: 4 }}>
      {/* Displaying the location's name */}
      <Typography variant='h2' component='h2' sx={{ marginBottom: 2 }}>
        {weatherData?.name} Forecast
      </Typography>

      {/* Navigation buttons */}
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

      {/* Swiper carousel for showing the forecast */}
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
                {/* Displaying weather details for each forecast item */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='body1' sx={{ fontWeight: 'bold', userSelect: 'none' }}>
                    {new Date(item.dt * 1000).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Typography>
                  <Box sx={{ width: '100px', height: '100px', margin: 'auto' }}>
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
