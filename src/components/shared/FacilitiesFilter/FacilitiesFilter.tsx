import React, { useEffect, useState, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

import { FacilitieTypes } from '../../../features/facilities/facilities.types';
import useQueries from '../../../utils/useQueries.hooks';
import useDebounce from '../../../utils/useDebounce.hooks';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifCcontent: 'center',
    alignItems: 'center',
  },
  fieldContainer: {
    '& > :not(style)': { m: 1, width: '25ch' },
    marginLeft: '15px',
  },
});

export default function FacilitiesFilter() {
  const [setQueries, getQueryByKey] = useQueries();

  const [searchValue, setSearchValue] = useState(getQueryByKey('search', ''));

  const debouncedValue = useDebounce<string>(searchValue, 500);
  const classes = useStyles();

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
        <TextField label="Search by name" variant="outlined" value={searchValue} onChange={handleChangeSearch} />
      </Box>
      <Box className={classes.fieldContainer}>
        <FormControl fullWidth>
          <InputLabel>type</InputLabel>
          <Select value={type} label="Type" onChange={handleChangeType}>
            {Object.values(FacilitieTypes).map((facilitieType) => (
              <MenuItem value={facilitieType} key={facilitieType}>
                {facilitieType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}
