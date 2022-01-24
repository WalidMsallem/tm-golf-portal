import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '400px ',
  },
  input: {
    width: '100%',
    marginBottom: '30px !important',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px !important',
    width: '100%',
  },
  radio: {
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    padding: '12px 10px',
    width: '45%',
    margin: 'unset !important',
  },
  error: {
    width: '100%',
  },
  collapseError: {
    width: '100%',
    padding: 0,
  },
  dackdrop: {
    color: '#fff',
    zIndex: 1,
  },
});
