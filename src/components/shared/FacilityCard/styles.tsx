import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Theme } from '@mui/system';

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.2),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    maxHeight: 152,
    margin: '15px',
    padding: '15px 25px !important',
    display: 'flex',
    justifyContent: 'space-between',
    width: 275,
    [theme.breakpoints.down('lg')]: {
      width: 350,
    },
    [theme.breakpoints.down(420)]: {
      width: 250,
    },
    [theme.breakpoints.down(350)]: {
      width: 200,
    },
  },
  actions: {
    display: 'flex',
    padding: '0 !important',
    alignItems: 'flex-start !important',
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '10px 0 !important',
  },
  title: {
    fontWeight: 500,
    letterSpacing: '0.8px',
    fontSize: 25,
  },
  subTitle: {
    textTransform: 'uppercase',
    fontWight: 'bold',
    fontSize: 15,
    color: '#EC691A',
  },
  description: {
    fontSize: 15,
    color: '#A0A0A0',
  },
  textMenuItem: {
    marginLeft: '5px !important',
  },
  menuButton: {
    padding: '0 !important',
  },
}));
