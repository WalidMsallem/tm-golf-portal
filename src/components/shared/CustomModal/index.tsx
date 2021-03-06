import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';

import { CancelButton, SubmitButton, useStyles } from './styles';
import { i18nComponentPrefix } from './constants';

type CustomModalPropsType = {
  bgColorSubmitButton?: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  isOpen: boolean;
  handleCloseModal: () => void;
  handleSubmit: () => void;
  loadingSubmitButton?: boolean;
  disabledSubmitButton?: boolean;
  textSubmitButton: string;
  contentMinHeight?: string;
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
  textSubmitButton,
  contentMinHeight,
}: CustomModalPropsType): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Grid className={classes.root} data-cy="custom-modal-container">
        <Grid className={classes.title}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Grid>
        <Divider />
        <Grid sx={{ mt: 2, minHeight: contentMinHeight || '250px' }} className={classes.content}>
          {children}
        </Grid>
        <Divider />

        <Grid className={classes.footer}>
          <CancelButton onClick={handleCloseModal}>{t(`${i18nComponentPrefix}button/cancel`)}</CancelButton>
          <SubmitButton
            data-cy="custom-modal-submit"
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
