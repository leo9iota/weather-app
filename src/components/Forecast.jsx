import React, { useRef } from 'react';
import { Paper, Typography, Grid, IconButton } from '@mui/material';
import BackArrow from '@mui/icons-material/ArrowBackIosNewRounded';
import ForwardArrow from '@mui/icons-material/ArrowForwardIosRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Forecast({ forecastData, weatherData }) {
  const swiperRef = useRef(null);

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

  return (
    <Paper elevation={0} sx={{ padding: 2, position: 'relative', paddingLeft: 4, paddingRight: 4 }}>
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
        <BackArrow />
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
              <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={12}>
                  <Typography variant='body1' sx={{ fontWeight: 'bold', userSelect: 'none' }}>
                    {new Date(item.dt * 1000).toLocaleTimeString()}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ userSelect: 'none' }}>
                    {item.weather[0].description}, Temp: {item.main.temp}°C
                  </Typography>
                </Grid>
              </Grid>
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
        <ForwardArrow />
      </IconButton>
    </Paper>
  );
}

export default Forecast;
