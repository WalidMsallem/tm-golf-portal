import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#ec691a33',
    width: '100%',
    minHeight: '90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
  button: {
    borderRadius: '4px',
    width: '180px',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.65px',
    padding: '10px 5px !important',
    margin: '0 20px !important',
  },
}));
