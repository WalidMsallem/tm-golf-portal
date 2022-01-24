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
import { i18nComponentPrefix } from './constants';

export default function FacilitiesFilter(): JSX.Element {
  const [setQueries, getQueryByKey] = useQueries();

  const [searchValue, setSearchValue] = useState(getQueryByKey('search', ''));

  const type = getQueryByKey('type', '');

  const limit = getQueryByKey('limit', '');

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
  const handleChangeMaxItem = (event: SelectChangeEvent) => {
    event.preventDefault();
    setQueries({ limit: event.target.value });
  };

  const maxItemOption = ['10', '15', '20', '25', '30', '35'];

  return (
    <Grid container className={classes.root}>
      <Box className={classes.fieldContainer}>
        <TextField
          label={t(`${i18nComponentPrefix}input/label/searchByName`)}
          variant="outlined"
          value={searchValue}
          onChange={handleChangeSearch}
        />
      </Box>
      <Box className={classes.fieldContainer}>
        <FormControl fullWidth>
          <InputLabel>{t(`${i18nComponentPrefix}select/label/type`)}</InputLabel>
          <Select value={type} label={t(`${i18nComponentPrefix}select/label/type`)} onChange={handleChangeType}>
            {Object.values(FacilityTypes).map((facilityType) => (
              <MenuItem value={facilityType} key={facilityType}>
                {facilityType}
              </MenuItem>
            ))}
            <MenuItem value="" key="default">
              {t(`${i18nComponentPrefix}select/option/type`)}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.fieldContainer}>
        <FormControl fullWidth>
          <InputLabel>{t(`${i18nComponentPrefix}select/label/maxItemPerPage`)}</InputLabel>
          <Select
            value={limit}
            label={t(`${i18nComponentPrefix}select/label/maxItemPerPage`)}
            onChange={handleChangeMaxItem}
          >
            {maxItemOption.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}
