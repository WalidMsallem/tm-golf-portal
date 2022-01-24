import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';

const componentPrefix = 'SWITCH_LANGUAGE.';

export default function SwitchLanguage(): JSX.Element {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t(`${componentPrefix}select/language`)}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={i18n.language}
          label={t(`${componentPrefix}select/language`)}
          onChange={handleChange}
        >
          <MenuItem value="en">En</MenuItem>
          <MenuItem value="fr">Fr</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
