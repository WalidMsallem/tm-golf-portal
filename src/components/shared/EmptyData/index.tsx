import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';

type EmptyDataPropsType = {
  minHeight?: string;
  message?: string;
  iconSize?: string;
};

const componentPrefix = 'EMPTY_DATA.';

export default function EmptyData({ minHeight, message, iconSize }: EmptyDataPropsType): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container className={classes.root} sx={{ minHeight: minHeight || '60vh' }} flexDirection="column">
      <Box>
        <FeedbackSharpIcon sx={{ fontSize: iconSize || '120px' }} />
      </Box>
      <Box>
        <Typography variant="h4">{message || t(`${componentPrefix}defaultText`)}</Typography>
      </Box>
    </Grid>
  );
}
