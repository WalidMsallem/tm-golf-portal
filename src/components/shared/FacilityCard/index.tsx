import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Tooltip from '@mui/material/Tooltip';

import { hideLongText } from '../../../utils/string.utils';
import { Facility, CreateOrUpdateModalStatus } from '../../../features/facilities/facilities.types';
import { manageCreateOrUpdateFacility, manageDeleteFacility } from '../../../features/facilities/facilities.actions';
import { useStyles, StyledMenu } from './styles';

type FacilitiesCardProps = {
  facilitieItem: Facility;
};

const componentPrefix = 'FACILITY_CARD.';

function FacilitiesCard({ facilitieItem }: FacilitiesCardProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const { name, type, address, id } = facilitieItem;

  return (
    <Card sx={{ width: 275 }} className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="div" className={classes.title}>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} className={classes.subTitle}>
          {type}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {hideLongText(address, 30)}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <Tooltip title="setting" placement="top">
          <IconButton
            aria-label="more"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>

        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
          <MenuItem
            key={1}
            onClick={() => {
              handleCloseMenu();
              dispatch(manageCreateOrUpdateFacility(CreateOrUpdateModalStatus.update, String(id)));
            }}
          >
            <SettingsIcon fontSize="small" />
            <Typography variant="body2" className={classes.textMenuItem}>
              {t(`${componentPrefix}menu/edit`)}
            </Typography>
          </MenuItem>
          <MenuItem
            key={2}
            onClick={() => {
              handleCloseMenu();
              dispatch(manageDeleteFacility(true, String(id)));
            }}
          >
            <DeleteOutlinedIcon fontSize="small" />
            <Typography variant="body2" className={classes.textMenuItem}>
              {t(`${componentPrefix}menu/delete`)}
            </Typography>
          </MenuItem>
        </StyledMenu>
      </CardActions>
    </Card>
  );
}

FacilitiesCard.propTypes = {};

export default FacilitiesCard;
