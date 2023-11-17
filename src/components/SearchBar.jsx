// SearchBar.jsx
import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ city, onCityChange, onSearch }) {
  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginBottom: 2 }}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={city}
        onChange={onCityChange}
        placeholder='Search location'
        inputProps={{ 'aria-label': 'search location' }}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
