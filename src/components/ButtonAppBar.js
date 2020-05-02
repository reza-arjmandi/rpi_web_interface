import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RecordLogButton from './RecordLogButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const menu_button = (classes) => {
  return (
    <IconButton 
      edge="start" 
      className={classes.menuButton} 
      color="inherit" 
      aria-label="menu">
        <MenuIcon />
    </IconButton>
  );
};

const app_title = (classes) => {
  return (
    <Typography variant="h6" className={classes.title}>
      Serial Port Logger 
    </Typography>
  );
};

const toolbar = (classes, is_record_started) => {
  return (
    <Toolbar>
      {menu_button(classes)}
      {app_title(classes)}
      <RecordLogButton is_record_started={is_record_started} />
    </Toolbar>
  );
}

export default function ButtonAppBar({is_record_started}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {toolbar(classes, is_record_started)}
      </AppBar>
    </div>
  );
}

ButtonAppBar.protoTypes = {
  is_record_started: PropTypes.bool,
}

ButtonAppBar.defaultProps = {
  is_record_started: false,
};

