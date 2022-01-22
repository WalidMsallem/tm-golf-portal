import React from 'react';

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { manageDeleteFacility, deleteFacilitieRequest } from '../../features/facilities/facilities.actions';
import CustomModal from '../shared/CustomModal';
import { isEmptySting } from '../../utils/string.utils';
import {
  loadingSelector,
  modalsStateSelector,
  selectedItemIdSelector,
  errorsSelector,
} from '../../features/facilities/facilities.selectors';
import { useStyles } from './styles';

const componentPrefix = 'DELETE_FACILITY.';

export default function DeleteFacility() {
  const loading = useSelector(loadingSelector);
  const errors = useSelector(errorsSelector);
  const modalsState = useSelector(modalsStateSelector);
  const itemId = useSelector(selectedItemIdSelector);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isOpen = modalsState.deleteFacility;
  const loadingSubmitButton = loading.deleteFacilityById;
  const modalTitle = t(`${componentPrefix}modalTitle/deleteFacility`);
  const errorMessage = errors.createFacility || errors.updateFacility;

  const handleCloseModal = (): void => {
    dispatch(manageDeleteFacility(false));
  };
  const handleSubmit = (): void => {
    if (itemId) {
      dispatch(deleteFacilitieRequest(itemId));
    }
  };

  return (
    <CustomModal
      title={modalTitle}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      loadingSubmitButton={loadingSubmitButton}
      // disabledSubmitButton
      handleSubmit={handleSubmit}
      textSubmitButton={t(`${componentPrefix}button/delete`)}
      contentMinHeight="100px"
      bgColorSubmitButton="#EE1B34"
    >
      <Grid container className={classes.root}>
        <Typography>{t(`${componentPrefix}warning/part1`)}</Typography>
        <Typography>{t(`${componentPrefix}warning/part2`)}</Typography>

        <Collapse in={!isEmptySting(errorMessage)} className={classes.collapseError}>
          <Alert className={classes.error} severity="error">
            {errorMessage}
          </Alert>
        </Collapse>
      </Grid>
    </CustomModal>
  );
}
