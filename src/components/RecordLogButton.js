import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function RecordLogButton({is_record_started}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"  
        color={is_record_started ? "secondary" : "default"} 
        size="large"
        className={classes.button}
        startIcon={is_record_started ? <StopIcon /> : <FiberManualRecordIcon color="secondary" />}
      >
        {is_record_started ? "Stop Recording" : "Start Recording"}
      </Button>
    </div>
  );
}

RecordLogButton.protoTypes = {
  is_record_started: PropTypes.bool,
}

RecordLogButton.defaultProps = {
  is_record_started: false,
};
