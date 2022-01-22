import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import FacilitiesFilter from '../shared/FacilitiesFilter';

const useStyles = makeStyles({
  root: {
    background: '#ec691a33',
    width: '100%',
    minHeight: '90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function FacilitieTopBar() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
        <FacilitiesFilter />
      </Grid>

      <Box sx={{ flexGrow: 0 }}>
        <Button variant="outlined">Create</Button>
      </Box>
    </Grid>
  );
}
