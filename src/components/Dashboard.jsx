import { Grid, Paper, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ height: '100%', padding: 2 }}>
          {/* Search Component */}
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginBottom: 2 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search location'
              inputProps={{ 'aria-label': 'search location' }}
            />
            <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              {/* Content for the left large card with weather information */}
              <Typography variant='h3' component='h3'>
                Zurich, Dübendorf
              </Typography>
              <Typography variant='h4' component='h4'>
                8. August 2023
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6' component='h6' sx={{ fontWeight: 'medium' }}>
                13:30
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h4' component='h4' sx={{ fontWeight: 'medium' }}>
                12°C
              </Typography>
              <Typography variant='h6' component='h6' sx={{ fontWeight: 'medium' }}>
                12°C / 14°C - Day
              </Typography>
            </Grid>
            <Grid item xs={6}>
              Icon
            </Grid>
          </Grid>
          {/* Other weather information here */}
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
