import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: '#ec691a33',
    width: '100%',
    minHeight: '90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
