import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

import FacilitiesFilter from '../shared/FacilitiesFilter';
import { manageCreateOrUpdateFacility } from '../../features/facilities/facilities.actions';
import { CreateOrUpdateModalStatus } from '../../features/facilities/facilities.types';

const useStyles = makeStyles({
  root: {
    background: '#ec691a33',
    width: '100%',
    minHeight: '90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderRadius: '4px',
    width: '150px',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.65px',
    padding: '10px 5px !important',
    margin: '0 20px !important',
  },
});

export default function FacilitieTopBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenModal = (): void => {
    dispatch(manageCreateOrUpdateFacility(CreateOrUpdateModalStatus.create));
  };
  return (
    <Grid className={classes.root}>
      <Grid component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
        <FacilitiesFilter />
      </Grid>

      <Box sx={{ flexGrow: 0 }}>
        <Button variant="contained" className={classes.button} onClick={handleOpenModal}>
          Create Facility
        </Button>
      </Box>
    </Grid>
  );
}
