import React, { ChangeEvent } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { FacilityTypes, CreateOrUpdateModalStatus } from '../../features/facilities/facilities.types';
import CustomModal from '../shared/CustomModal';
import { isEmptySting } from '../../utils/string.utils';
import { loadingSelector, modalsStateSelector, facilitiySelector } from '../../features/facilities/facilities.selectors';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '400px ',
  },
  input: {
    width: '100%',
    marginBottom: '30px !important',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px !important',
    width: '100%',
  },
  radio: {
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    padding: '12px 10px',
    width: '45%',
    margin: 'unset !important',
  },
  error: {
    width: '100%',
  },
  collapseError: {
    width: '100%',
  },
  dackdrop: {
    color: '#fff',
    zIndex: 1,
  },
});

export default function CreateOrUpdateFacility() {
  const loading = useSelector(loadingSelector);

  const modalsState = useSelector(modalsStateSelector);

  const facilitiy = useSelector(facilitiySelector);

  const [formData, setFormData] = React.useState({
    name: facilitiy.name,
    type: facilitiy.type,
    address: facilitiy.address,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const { name, type, address } = formData;
  console.log('loading.deleteFacilityById', loading.getFacilityById);

  const classes = useStyles();
  const isFieldsNotFilled = Object.values(formData).some((element) => isEmptySting(element));

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
          label="Facility name"
          variant="standard"
          className={classes.input}
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <RadioGroup row name="type" onChange={handleInputChange} className={classes.radioGroup} defaultValue={type}>
          <FormControlLabel
            defaultChecked
            value={FacilityTypes.indoor}
            control={<Radio />}
            label="Indoor"
            className={classes.radio}
            checked
          />
          <FormControlLabel value={FacilityTypes.range} control={<Radio />} label="Range" className={classes.radio} />
        </RadioGroup>

        <TextField
          label="Address"
          variant="standard"
          className={classes.input}
          name="address"
          value={address}
          onChange={handleInputChange}
        />
        <Collapse in={isFieldsNotFilled} className={classes.collapseError}>
          <Alert className={classes.error} severity="error">
            All fields are required!
          </Alert>
        </Collapse>
      </Grid>
    );
  };

  const isOpen =
    modalsState.openOrUpdateFacility === CreateOrUpdateModalStatus.update ||
    modalsState.openOrUpdateFacility === CreateOrUpdateModalStatus.create;
  return (
    <CustomModal title="Create modal" isOpen={isOpen}>
      {renderContent()}
    </CustomModal>
  );
}
