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
    [theme.breakpoints.down(1040)]: {
      maxWidth: '170px',
    },
    [theme.breakpoints.down(990)]: {
      maxWidth: '140px',
    },
  },
  field: {
    [theme.breakpoints.down(1040)]: {
      maxWidth: '170px',
    },
    [theme.breakpoints.down(990)]: {
      maxWidth: '140px',
    },
  },
}));
