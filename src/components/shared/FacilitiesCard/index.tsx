import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Tooltip from '@mui/material/Tooltip';
import { hideLongText } from '../../../utils/string.utils';
import { Facility, CreateOrUpdateModalStatus } from '../../../features/facilities/facilities.types';
import { manageCreateOrUpdateFacility, manageDeleteFacility } from '../../../features/facilities/facilities.actions';

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    maxHeight: 152,
    margin: '15px',
    padding: '15px 25px !important',
    display: 'flex',
    justifyContent: 'space-between',
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
});

type FacilitiesCardProps = {
  facilitieItem: Facility;
};

function FacilitiesCard({ facilitieItem }: FacilitiesCardProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyles();
  const dispatch = useDispatch();

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
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              width: '10ch',
            },
          }}
        >
          <MenuItem
            key={1}
            onClick={() => {
              handleCloseMenu();
              dispatch(manageCreateOrUpdateFacility(CreateOrUpdateModalStatus.update, String(id)));
            }}
          >
            <SettingsIcon fontSize="small" />
            <Typography variant="body2" className={classes.textMenuItem}>
              Edit
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
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
}

FacilitiesCard.propTypes = {};

export default FacilitiesCard;
