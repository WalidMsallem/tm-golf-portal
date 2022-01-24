import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifCcontent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  fieldContainer: {
    '& > :not(style)': { m: 1, width: '25ch' },
    marginLeft: '15px',
  },
}));
