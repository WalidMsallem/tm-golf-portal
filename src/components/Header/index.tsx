import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SwitchLanguage from '../SwitchLanguage';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    // <header className={classes.root}>
    //   <Grid>
    //     <Typography></Typography>
    //     <Grid>
    //       <Button
    //         id="fade-button"
    //         aria-controls={open ? 'fade-menu' : undefined}
    //         aria-haspopup="true"
    //         aria-expanded={open ? 'true' : undefined}
    //         onClick={handleClick}
    //       >
    //         Dashboard
    //       </Button>
    //       <Menu
    //         id="fade-menu"
    //         MenuListProps={{
    //           'aria-labelledby': 'fade-button',
    //         }}
    //         anchorEl={anchorEl}
    //         open={open}
    //         onClose={handleClose}
    //         TransitionComponent={Fade}
    //       >
    //         <MenuItem onClick={handleClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleClose}>My account</MenuItem>
    //         <MenuItem onClick={handleClose}>Logout</MenuItem>
    //       </Menu>
    //     </Grid>
    //   </Grid>
    // </header>
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" className={classes.root} color="transparent">
      <Toolbar className={classes.topBar}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          // sx={{ flexGrow: 1 }}
        >
          TRACK MAN
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <SwitchLanguage />
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
