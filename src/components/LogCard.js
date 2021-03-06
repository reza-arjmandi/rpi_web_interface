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
import Delete from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Usb from '@material-ui/icons/Usb';

import LogCardTextField from './LogCardTextField';
import BaudRateField from './BaudRateField';
import FlowControlField from './FlowControlField';
import ParityField from './ParityField';
import StopBitsField from './StopBitsField';
import CharacterSizeField from './CharacterSizeField';

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

const LogCardContent = (log_file) => {
  return (
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Log file: {log_file}
          <br />
          ...
        </Typography>
      </CardContent>
  );
};

const LogCardActions = (
  classes, is_expanded, download_click_handler, 
  delete_click_handler, expand_click_handler) => {
  return (
    <CardActions disableSpacing>
      <IconButton 
        aria-label="download log file" 
        onClick={download_click_handler}>
        <GetAppIcon />
      </IconButton>

      <IconButton 
        aria-label="delete log"
        onClick={delete_click_handler}>
        <Delete />
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
  is_expanded, device_name, driver, log_file, baud_rate, 
  flow_control, parity, stop_bits, character_size, on_value_change) => {
  
  return (
    <Collapse in={is_expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <LogCardTextField 
          id='device_name' 
          label='Device Name' 
          default_value={device_name}
          on_value_change={on_value_change} />
        <LogCardTextField 
          id='log_file' 
          label='Log File Name' 
          default_value={log_file}
          on_value_change={on_value_change} />
        <LogCardTextField 
          id='driver' 
          label='Serial port driver' 
          default_value={driver}
          on_value_change={on_value_change} />
        <BaudRateField 
          value={baud_rate}
          on_value_change={on_value_change} />
        <FlowControlField 
          value={flow_control}
          on_value_change={on_value_change} />
        <ParityField 
          value={parity}
          on_value_change={on_value_change} />
        <StopBitsField 
          value={stop_bits}
          on_value_change={on_value_change} />
        <CharacterSizeField 
          default_value={character_size}
          on_value_change={on_value_change} />
      </CardContent>
    </Collapse>
  );
};

export default function LogCard({
    device_name, driver, log_file, baud_rate, flow_control, 
    parity, stop_bits, character_size, update_log, delete_log, download_log}) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handle_download_click = () => {
    download_log({
      device_name,
    });
  };

  const handle_delete_click = () => {
    delete_log({
      device_name,
    });
  };

  var log = {
    device_name,
    driver,
    log_file,
    baud_rate,
    flow_control,
    parity,
    stop_bits,
    character_size
  };
  
  const on_value_change = (item) => {
    log[item.id] = item.value;
    update_log(device_name, log);
  };

  return (
    <Card className={classes.root}>
      {LogCardHeader(device_name, driver)}
      {LogCardContent(log_file)}
      {LogCardActions(
        classes, expanded, handle_download_click, 
        handle_delete_click, handleExpandClick)}
      {LogCardCollapse(expanded, device_name, driver,
       log_file, baud_rate, flow_control, parity, stop_bits, 
       character_size, on_value_change)}
    </Card>
  );
}

LogCard.protoTypes = {
  device_name: PropTypes.string.isRequired,
  driver: PropTypes.string.isRequired,
  log_file: PropTypes.string.isRequired,
  baud_rate: PropTypes.string.isRequired,
  flow_control: PropTypes.string.isRequired,
  parity: PropTypes.string.isRequired,
  stop_bits: PropTypes.string.isRequired,
  character_size: PropTypes.string.isRequired,
  update_log: PropTypes.func.isRequired,
};