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

const dialog_actions = (on_close) => {
  return (
    <DialogActions>
      <Button onClick={on_close} color="primary">
        Cancel
      </Button>
      <Button onClick={on_close} color="primary">
        Add
      </Button>
    </DialogActions>
  );
};

const dialog_content = () => {
  return (
    <DialogContent>
      {dialog_content_text()}
      <NewDeviceInfoPage />
    </DialogContent>
  );
};

export default function AddNewLogDialog({ on_close, open }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dialog 
        open={open} 
        onClose={on_close} 
        aria-labelledby="form-dialog-title">
          {dialog_title()}
          {dialog_content()}
          {dialog_actions(on_close)}
      </Dialog>
    </div>
  );
}

AddNewLogDialog.propTypes = {
  on_close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
