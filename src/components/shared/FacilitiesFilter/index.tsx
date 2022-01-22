import React, { useEffect, useState, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

import { FacilityTypes } from '../../../features/facilities/facilities.types';
import useQueries from '../../../utils/useQueries.hooks';
import useDebounce from '../../../utils/useDebounce.hooks';
import { useStyles } from './styles';

const componentPrefix = 'FACILITIES_FILTER.';

export default function FacilitiesFilter() {
  const [setQueries, getQueryByKey] = useQueries();

  const [searchValue, setSearchValue] = useState(getQueryByKey('search', ''));

  const debouncedValue = useDebounce<string>(searchValue, 500);
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setQueries({ search: debouncedValue });
  }, [debouncedValue]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    event.preventDefault();
    setQueries({ type: event.target.value });
  };

  const type = getQueryByKey('type', '');

  return (
    <Grid container className={classes.root}>
      <Box className={classes.fieldContainer}>
        <TextField
          label={t(`${componentPrefix}input/label/searchByName`)}
          variant="outlined"
          value={searchValue}
          onChange={handleChangeSearch}
        />
      </Box>
      <Box className={classes.fieldContainer}>
        <FormControl fullWidth>
          <InputLabel>{t(`${componentPrefix}input/select/type`)}</InputLabel>
          <Select value={type} label="Type" onChange={handleChangeType}>
            {Object.values(FacilityTypes).map((facilityType) => (
              <MenuItem value={facilityType} key={facilityType}>
                {facilityType}
              </MenuItem>
            ))}
            <MenuItem value="" key="default">
              {t(`${componentPrefix}input/select/item/all`)}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}
