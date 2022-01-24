import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import Grid from '@mui/material/Grid';
import { ToastContainer } from 'react-toastify';

import Header from '../Header';
import { useStyles } from './styles';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Header />
      <Grid container className={classes.content}>
        {children}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}
