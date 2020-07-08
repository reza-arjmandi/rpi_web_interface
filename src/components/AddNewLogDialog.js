import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import NewDeviceInfoPage from './NewDeviceInfoPage'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
}));

const dialog_content_text = () => {
  return (
    <DialogContentText>
      To add new log, please enter following information.
    </DialogContentText>
  );
};

const dialog_title = () => {
  return (
    <DialogTitle id="form-dialog-title">Add New Log</DialogTitle>
  );
};

const dialog_actions = (on_add, on_close) => {
  return (
    <DialogActions>
      <Button onClick={on_close} color="primary">
        Cancel
      </Button>
      <Button onClick={on_add} color="primary">
        Add
      </Button>
    </DialogActions>
  );
};

const dialog_content = (on_value_change) => {
  return (
    <DialogContent>
      {dialog_content_text()}
      <NewDeviceInfoPage on_value_change={on_value_change} />
    </DialogContent>
  );
};

export default function AddNewLogDialog({ on_close, open, add_new_log }) {
  const classes = useStyles();

  var new_log = {
    device_name: "", 
    log_file: "", 
    driver: "",
    baud_rate: 9600, 
    flow_control: "none", 
    parity: "none", 
    stop_bits: 1, 
    character_size: "8"
  };
  const on_value_change = (obj) => {
    new_log[obj.id] = obj.value;
  };

  const on_add = (event) => {
    if(new_log.device_name === "" 
    || new_log.log_file === "" 
    || new_log.driver === "") {
      return;
    }
    add_new_log(new_log);
    on_close(event);
  };

  return (
    <div className={classes.root}>
      <Dialog 
        open={open} 
        onClose={on_close} 
        aria-labelledby="form-dialog-title">
          {dialog_title()}
          {dialog_content(on_value_change)}
          {dialog_actions(on_add, on_close)}
      </Dialog>
    </div>
  );
}

AddNewLogDialog.propTypes = {
  on_close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  add_new_log: PropTypes.func.isRequired,
};
