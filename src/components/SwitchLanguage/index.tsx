import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

import { StyledMenu, useStyles } from './styles';

const componentPrefix = 'SWITCH_LANGUAGE.';

export default function SwitchLanguage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const renderFlag = () => {
    if (i18n.language === 'fr') {
      return <img src="./fr-flag.svg" alt="fr flag icon" className={classes.img} />;
    }
    return <img src="./uk-flag.svg" alt="en flag icon" className={classes.img} />;
  };

  return (
    <Box className={classes.root}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        {t(`${componentPrefix}button/selectLanguage`)}
      </Button>
      <StyledMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            changeLanguage('en');
          }}
        >
          {t(`${componentPrefix}select/english`)}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            changeLanguage('fr');
          }}
        >
          {t(`${componentPrefix}select/frensh`)}
        </MenuItem>
      </StyledMenu>
      {renderFlag()}
    </Box>
  );
}
