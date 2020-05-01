import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import LogDialogTextField from './LogDialogTextField';
import LogDialogSelectField from './LogDialogSelectField'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    select_field: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    text_field: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function AddNewLogDialog({ on_close, open }) {
    const classes = useStyles();

    const [baud_rate, set_baud_rate] = React.useState(9600);
    const [flow_control, set_flow_control] = React.useState('none');
    const [parity, set_parity] = React.useState('none');
    const [stop_bits, set_stop_bits] = React.useState(1);

    const handle_baud_rate_change = (value) => {
        set_baud_rate(value);
    };

    const handle_flow_control_change = (value) => {
        set_flow_control(value);
    };
    
    const handle_parity_change = (value) => {
        set_parity(value);
    };

    const handle_stop_bits_change = (value) => {
        set_stop_bits(value);
    };

    const baud_rates = [
       110, 300, 600, 1200, 2400, 4800, 9600, 14400, 
       19200, 38400, 57600, 115200, 128000, 256000,
    ];
    
    const flow_controls = [
        "none", "software", "hardware",
    ];

    const parities = [
        "none", "odd", "even",
    ];

    const stop_bits_type = [
        1, 1.5, 2,
    ];

  return (
    <div className={classes.root}>
      <Dialog open={open} onClose={on_close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Log</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          
          <LogDialogTextField id="device_name" label="Device Name" />
          <LogDialogTextField id="log_file_name" label="Log File Name" />
          <LogDialogTextField id="serial_port_driver" label="Serial Port Driver" />

          <LogDialogSelectField
            id="baud_rate"
            label="Baud Rate"
            value={baud_rate}
            on_change={handle_baud_rate_change}
            items={baud_rates}
          />
            
          <LogDialogSelectField
            id="flow_constrol"
            label="Flow Control"
            value={flow_control}
            on_change={handle_flow_control_change}
            items={flow_controls}
          />

          <LogDialogSelectField
            id="parity"
            label="Parity"
            value={parity}
            on_change={handle_parity_change}
            items={parities}
          />

          <LogDialogSelectField
            id="stop_bits"
            label="Stop Bits"
            value={stop_bits}
            on_change={handle_stop_bits_change}
            items={stop_bits_type}
          />

          <LogDialogTextField
            id="character_size"
            label="Character Size"
            type="number"
            default_value={8}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={on_close} color="primary">
            Cancel
          </Button>
          <Button onClick={on_close} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddNewLogDialog.propTypes = {
  on_close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
