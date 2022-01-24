import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifCcontent: 'center',
    alignItems: 'center',
    minWidth: '90px',
    [theme.breakpoints.down(380)]: {
      display: 'none',
    },
  },
}));
