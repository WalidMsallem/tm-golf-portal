import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    background: '#FFFFFF',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    minHeight: 80,
    marginBottom: '15px',
    padding: '15px 25px',
    display: 'flex',
  },
});
export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid>
        <Typography>TRACK MAN</Typography>
      </Grid>
    </header>
  );
}
