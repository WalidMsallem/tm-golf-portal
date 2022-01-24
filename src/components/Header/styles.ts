import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    minHeight: 80,
    marginBottom: '35px',
    padding: '15px 25px',
    display: 'flex',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down(380)]: {
      justifyContent: 'initial',
    },
  },
}));
