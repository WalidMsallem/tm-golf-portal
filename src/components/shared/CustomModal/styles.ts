import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';

export const CancelButton = styled(Button)<ButtonProps>(() => ({
  textTransform: 'uppercase',
  color: 'rgba(160, 160, 160, 1)',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '13px',
  width: '160px',
  letterSpacing: '0.65px',
}));

export const SubmitButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: '4px',
  width: '160px',
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '13px',
  textTransform: 'uppercase',
  letterSpacing: '0.65px',
}));

export const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '24px',
    padding: 4,
  },

  title: {
    fontWeight: 500,
    fontSize: '22px',
    padding: '15px 20px',
    color: '#414141',
    textTransform: 'uppercase',
    letterSpacing: '0.7px',
  },

  content: {
    padding: '5px 10px',
    fontSize: '15px',
    textAlign: 'center',
    color: '#414141',
  },
  footer: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
