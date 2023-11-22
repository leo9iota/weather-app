import React, { useRef } from 'react';
import { Paper, Typography, Grid, IconButton } from '@mui/material';
import BackArrow from '@mui/icons-material/ArrowBackIosNewRounded';
import ForwardArrow from '@mui/icons-material/ArrowForwardIosRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Forecast({ forecastData }) {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, position: 'relative' }}>
      <IconButton sx={{ position: 'absolute', left: 0, zIndex: 1 }} onClick={goPrev}>
        <BackArrow />
      </IconButton>

      <Typography variant='h2' component='h2' sx={{ marginBottom: 2 }}>
        Weather Forecast
      </Typography>

      {forecastData && forecastData.list ? (
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {forecastData.list.slice(0, 24).map((item, index) => (
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

      <IconButton sx={{ position: 'absolute', right: 0, zIndex: 1 }} onClick={goNext}>
        <ForwardArrow />
      </IconButton>
    </Paper>
  );
}

export default Forecast;
