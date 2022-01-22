import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FacilitiesFilter from '../shared/FacilitiesFilter';
import { manageCreateOrUpdateFacility } from '../../features/facilities/facilities.actions';
import { CreateOrUpdateModalStatus } from '../../features/facilities/facilities.types';
import { useStyles } from './styles';

const componentPrefix = 'FACILITY_TOP_BAR.';

export default function FacilitieTopBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
          {t(`${componentPrefix}button/createFacility`)}
        </Button>
      </Box>
    </Grid>
  );
}
