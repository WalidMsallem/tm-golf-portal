import React, { ChangeEvent, useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';

import { FacilityTypes, CreateOrUpdateModalStatus } from '../../features/facilities/facilities.types';
import {
  manageCreateOrUpdateFacility,
  updateFacilityRequest,
  createFacilityRequest,
} from '../../features/facilities/facilities.actions';
import CustomModal from '../shared/CustomModal';
import { isEmptySting } from '../../utils/string.utils';
import {
  loadingSelector,
  modalsStateSelector,
  facilitiySelector,
  errorsSelector,
} from '../../features/facilities/facilities.selectors';
import { useStyles } from './styles';
import { i18nComponentPrefix } from './constants';

export default function CreateOrUpdateFacility(): JSX.Element {
  const loading = useSelector(loadingSelector);
  const errors = useSelector(errorsSelector);
  const modalsState = useSelector(modalsStateSelector);
  const facilitiy = useSelector(facilitiySelector);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: facilitiy.name,
    type: facilitiy.type,
    address: facilitiy.address,
  });
  const { name, type, address } = formData;

  useEffect(() => {
    setFormData({
      name: facilitiy.name,
      type: facilitiy.type,
      address: facilitiy.address,
    });
  }, [facilitiy]);

  const modalState = modalsState.openOrUpdateFacility;
  const isOpen = modalState === CreateOrUpdateModalStatus.update || modalState === CreateOrUpdateModalStatus.create;
  const loadingSubmitButton = loading.createFacility || loading.updateFacility;
  const modalTitle =
    modalState === CreateOrUpdateModalStatus.update
      ? t(`${i18nComponentPrefix}modalTitle/editFacility`)
      : t(`${i18nComponentPrefix}modalTitle/createFacility`);
  const errorMessage = errors.createFacility || errors.updateFacility;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCloseModal = (): void => {
    dispatch(manageCreateOrUpdateFacility(CreateOrUpdateModalStatus.close));
  };
  const handleSubmit = (): void => {
    if (modalState === CreateOrUpdateModalStatus.update) {
      dispatch(updateFacilityRequest(String(facilitiy.id), { ...facilitiy, ...formData }));
    } else {
      dispatch(createFacilityRequest(formData));
    }
  };

  const renderContent = () => {
    if (loading.getFacilityById) {
      return (
        <Backdrop open={true} className={classes.dackdrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      );
    }

    return (
      <Grid container className={classes.root}>
        <TextField
          label={t(`${i18nComponentPrefix}label/input/facilityName`)}
          variant="standard"
          className={classes.input}
          name="name"
          value={name}
          onChange={handleInputChange}
          data-cy="input-name"
        />
        <RadioGroup row name="type" onChange={handleInputChange} className={classes.radioGroup} data-cy="radio-type">
          <FormControlLabel
            defaultChecked
            value={FacilityTypes.indoor}
            control={<Radio />}
            label={`${t(`${i18nComponentPrefix}label/radio/indoor`)}`}
            className={classes.radio}
            checked={type === FacilityTypes.indoor}
            data-cy="radio-indoor"
          />
          <FormControlLabel
            defaultChecked
            value={FacilityTypes.range}
            control={<Radio />}
            label={`${t(`${i18nComponentPrefix}label/radio/range`)}`}
            className={classes.radio}
            checked={type === FacilityTypes.range}
            data-cy="radio-range"
          />
        </RadioGroup>

        <TextField
          label={t(`${i18nComponentPrefix}label/input/address`)}
          variant="standard"
          className={classes.input}
          name="address"
          value={address}
          onChange={handleInputChange}
          data-cy="radio-address"
        />
        <Collapse in={!isEmptySting(errorMessage)} className={classes.collapseError}>
          <Alert className={classes.error} severity="error">
            {errorMessage}
          </Alert>
        </Collapse>
      </Grid>
    );
  };

  return (
    <CustomModal
      title={modalTitle}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      loadingSubmitButton={loadingSubmitButton}
      // disabledSubmitButton
      handleSubmit={handleSubmit}
      textSubmitButton={t(`${i18nComponentPrefix}button/saveChange`)}
    >
      {renderContent()}
    </CustomModal>
  );
}
