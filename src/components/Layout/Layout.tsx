import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Header from '../Header';

const useStyles = makeStyles({
  root: {
    background: '#f1f3f4',
    minHeight: '100vh',
  },
  content: {
    margin: '0 10px',
  },
});

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Header />
      <Grid container className={classes.content}>
        {children}
      </Grid>
    </Grid>
  );
}
