import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Forecast({ forecastData }) {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant='h6' component='h2'>
        Weather Forecast
      </Typography>
      {forecastData && forecastData.list ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {forecastData.list.slice(0, 9).map((item, index) => (
            <SwiperSlide key={index}>
              <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={12}>
                  <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                    {new Date(item.dt * 1000).toLocaleTimeString()}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2'>
                    {item.weather[0].description}, Temp: {item.main.temp}°C
                  </Typography>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Typography>No forecast data available</Typography>
      )}
    </Paper>
  );
}

export default Forecast;
