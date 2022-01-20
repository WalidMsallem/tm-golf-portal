import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Tooltip from '@mui/material/Tooltip';
import { hideLongText } from '../../../utils/string.utils';
import { Facilitie } from '../../../features/facilities/facilities.types';

const useStyles = makeStyles({
  root: {
    background: 'red',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1) !important',
    borderRadius: 4,
    maxHeight: 152,
    margin: '5px 10px',
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
  facilitieItem: Facilitie;
};

function FacilitiesCard({ facilitieItem }: FacilitiesCardProps) {
  const { name, type, address } = facilitieItem;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>

        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '10ch',
            },
          }}
        >
          <MenuItem key={1}>
            <SettingsIcon fontSize="small" />
            <Typography variant="body2" className={classes.textMenuItem}>
              Edit
            </Typography>
          </MenuItem>
          <MenuItem key={2}>
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
