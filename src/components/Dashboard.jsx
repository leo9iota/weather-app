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

          {/* Content for the left large card with weather information */}
          <Typography variant='h4' component='h1'>
            Zurich, Dübendorf
          </Typography>
          <Typography variant='h2' component='h2' sx={{ fontWeight: 'medium' }}>
            12°C
          </Typography>
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
