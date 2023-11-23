import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';
import { useThemeContext } from './ThemeContext'; // import the useThemeContext hook

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { currentTheme } = useThemeContext(); // use the currentTheme from context

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const menuItems = ['Home', 'Pricing', 'About'];

  const isDarkTheme = currentTheme === 'dark';

  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: isDarkTheme ? 'rgba(22, 22, 31, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          boxShadow: 'none',
          color: isDarkTheme ? 'white' : 'black',
        }}
      >
        <Toolbar sx={{ minHeight: 56 }}>
          <Hidden mdUp>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Hidden mdDown>
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  margin: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'secondary.main',
                    textDecoration: 'underline',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Hidden>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
