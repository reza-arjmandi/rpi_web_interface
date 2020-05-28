import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    display: 'flex',
    '& > * + *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function RecordLogButton({
  is_fetching, is_record_started}) {
  const classes = useStyles();

  if(is_fetching) {
    return (
      <div className={classes.root}>
        <CircularProgress color='secondary' />
      </div>
    )
  }

  return (
    <div>
      <Button
        variant="contained"  
        color={is_record_started ? "secondary" : "default"} 
        size="large"
        className={classes.button}
        startIcon={
          is_record_started 
          ? <StopIcon /> 
          : <FiberManualRecordIcon color="secondary" />}
      >
        {is_record_started ? "Stop Recording" : "Start Recording"}
      </Button>
    </div>
  );
}

RecordLogButton.protoTypes = {
  is_fetching: PropTypes.bool,
  is_record_started: PropTypes.bool,
}

RecordLogButton.defaultProps = {
  is_fetching: false,
  is_record_started: false,
};
