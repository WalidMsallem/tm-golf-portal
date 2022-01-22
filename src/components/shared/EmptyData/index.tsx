import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
import { Typography } from '@mui/material';

// const StyledGridOverlay = styled(GridOverlay)(({ theme }) => ({
//   flexDirection: 'column',
//   '& .ant-empty-img-1': {
//     fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
//   },
//   '& .ant-empty-img-2': {
//     fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
//   },
//   '& .ant-empty-img-3': {
//     fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
//   },
//   '& .ant-empty-img-4': {
//     fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
//   },
//   '& .ant-empty-img-5': {
//     fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
//     fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
//   },
// }));
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

type EmptyDataPropsType = {
  minHeight?: string;
  message?: string;
  iconSize?: string;
};
export default function EmptyData({ minHeight, message, iconSize }: EmptyDataPropsType) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} sx={{ minHeight: minHeight || '60vh' }} flexDirection="column">
      <Box>
        <FeedbackSharpIcon sx={{ fontSize: iconSize || '120px' }} />
      </Box>
      <Box>
        <Typography variant="h4">{message || 'No Data'}</Typography>
      </Box>
    </Grid>
  );
}
