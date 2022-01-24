import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '20px ',
  },
  error: {
    width: '100%',
  },
  collapseError: {
    width: '100%',
    padding: 0,
  },
});
