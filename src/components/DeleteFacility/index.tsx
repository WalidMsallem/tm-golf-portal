import React from 'react';

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

import { manageDeleteFacility, deleteFacilitieRequest } from '../../features/facilities/facilities.actions';
import CustomModal from '../shared/CustomModal';
import { isEmptySting } from '../../utils/string.utils';
import {
  loadingSelector,
  modalsStateSelector,
  selectedItemIdSelector,
  errorsSelector,
} from '../../features/facilities/facilities.selectors';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '20px ',
  },
  error: {
    width: '100%',
  },
  collapseError: {
    width: '100%',
    padding: 0,
  },
});

export default function DeleteFacility() {
  const loading = useSelector(loadingSelector);
  const errors = useSelector(errorsSelector);
  const modalsState = useSelector(modalsStateSelector);
  const itemId = useSelector(selectedItemIdSelector);
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log('itemId', itemId);

  const isOpen = modalsState.deleteFacility;
  const loadingSubmitButton = loading.deleteFacilityById;
  const modalTitle = 'Delete Facility';
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
      textSubmitButton="Delete"
      contentMinHeight="100px"
      bgColorSubmitButton="#EE1B34"
    >
      <Grid container className={classes.root}>
        <Typography>Are you sure you want to delete this facility?</Typography>
        <Typography> You won’t be able to recover this data.</Typography>

        <Collapse in={!isEmptySting(errorMessage)} className={classes.collapseError}>
          <Alert className={classes.error} severity="error">
            {errorMessage}
          </Alert>
        </Collapse>
      </Grid>
    </CustomModal>
  );
}
