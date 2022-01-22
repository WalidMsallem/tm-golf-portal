import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
