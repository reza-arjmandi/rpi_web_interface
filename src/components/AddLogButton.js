import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function AddLogButton({onAddLog}) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Fab 
        variant="extended" 
        color="primary"
        onClick={() => onAddLog()}>
          <AddIcon className={classes.extendedIcon} />
          Add Log
      </Fab>
      </div>
    );
};

AddLogButton.protoTypes = {
  onAddLog: PropTypes.func,
}
