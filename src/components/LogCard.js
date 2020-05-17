import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Usb from '@material-ui/icons/Usb';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const LogCardHeader = (title, sub_header) => {
  return (
      <CardHeader
        avatar={
          <Usb fontSize='large' />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={sub_header}
      />
  )
};

const LogCardContent = (log_file_name) => {
  return (
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Log file: {log_file_name}
          <br />
          ...
        </Typography>
      </CardContent>
  );
};

const LogCardActions = (classes, is_expanded, expand_click_handler) => {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="download log file">
        <GetAppIcon />
      </IconButton>

      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: is_expanded,
        })}
        onClick={expand_click_handler}
        aria-expanded={is_expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  );
};

const LogCardCollapse = (
  is_expanded, device_name, serial_port_driver, log_file_name, baud_rate, 
  flow_control, parity, stop_bits, character_size) => {
  
  return (
    <Collapse in={is_expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
          Device Name: {device_name}
          <br />
          Serial Port Driver: {serial_port_driver}
          <br />
          Log File Name: {log_file_name}
          <br />
          Baud Rate: {baud_rate}
          <br />
          Flow Control: {flow_control}
          <br />
          Parity: {parity}
          <br />
          Stop Bits: {stop_bits}
          <br />
          Character Size: {character_size}
        </Typography>
      </CardContent>
    </Collapse>
  );
};

export default function LogCard({
    device_name, serial_port_driver, log_file_name, baud_rate, flow_control, 
    parity, stop_bits, character_size}) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      {LogCardHeader(device_name, serial_port_driver)}
      {LogCardContent(log_file_name)}
      {LogCardActions(classes, expanded, handleExpandClick)}
      {LogCardCollapse(expanded, device_name, serial_port_driver,
       log_file_name, baud_rate, flow_control, parity, stop_bits, 
       character_size)}
    </Card>
  );
}

LogCard.protoTypes = {
  device_name: PropTypes.string.isRequired,
  serial_port_driver: PropTypes.string.isRequired,
  log_file_name: PropTypes.string.isRequired,
  baud_rate: PropTypes.string.isRequired,
  flow_control: PropTypes.string.isRequired,
  parity: PropTypes.string.isRequired,
  stop_bits: PropTypes.string.isRequired,
  character_size: PropTypes.string.isRequired,
};