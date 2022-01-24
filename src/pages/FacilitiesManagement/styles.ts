import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    margin: '15px 10px',
  },
  paginationContainer: {
    margin: '15px 10px',
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    minHeight: '60vh',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
}));
