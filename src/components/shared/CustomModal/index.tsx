import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button, { ButtonProps } from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  color: 'rgba(160, 160, 160, 1)',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '13px',
  width: '160px',
  letterSpacing: '0.65px',
}));

const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: '4px',
  width: '160px',
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '13px',
  textTransform: 'uppercase',
  letterSpacing: '0.65px',
}));

const useStyles = makeStyles({
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
    padding: '5px 20px',
    fontSize: '15px',
    textAlign: 'center',
    color: '#414141',
    minHeight: '250px',
  },
  footer: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

type CustomModalPropsType = {
  bgColorSubmitButton?: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  isOpen: boolean;
  handleCloseModal: () => void;
  handleSubmit: () => void;
  loadingSubmitButton?: boolean;
  disabledSubmitButton?: boolean;
  textSubmitButton?: string;
};
export default function CustomModal({
  bgColorSubmitButton,
  children,
  title,
  isOpen,
  handleCloseModal,
  handleSubmit,
  loadingSubmitButton,
  disabledSubmitButton,
  textSubmitButton = 'Submit',
}: CustomModalPropsType) {
  const classes = useStyles();

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      // aria-footerby="modal-modal-footer"
    >
      <Grid className={classes.root}>
        <Grid className={classes.title}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Grid>
        <Divider />
        <Grid sx={{ mt: 2 }} className={classes.content}>
          {children}
        </Grid>
        <Divider />

        <Grid className={classes.footer}>
          <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
          <SubmitButton
            sx={{
              backgroundColor: bgColorSubmitButton || '#EC691A',
              '&:hover': {
                backgroundColor: bgColorSubmitButton || '#EC691A',
              },
              '&:disabled': {
                color: '#FFFFFF',
              },
            }}
            disabled={disabledSubmitButton}
            onClick={handleSubmit}
          >
            {loadingSubmitButton ? 'Loading ...' : textSubmitButton}
          </SubmitButton>
        </Grid>
      </Grid>
    </Modal>
  );
}
