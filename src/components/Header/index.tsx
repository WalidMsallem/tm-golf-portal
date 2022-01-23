import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SwitchLanguage from '../SwitchLanguage';
import { useStyles } from './styles';

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} color="transparent">
      <Toolbar className={classes.topBar}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          TRACK MAN
        </Typography>
        <SwitchLanguage />
      </Toolbar>
    </AppBar>
  );
}
