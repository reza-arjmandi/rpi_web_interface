import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    select_field: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
}));

export default function LogDialogSelectField({id, label, value, on_change, items}) {
    const classes = useStyles();

    return (
        <TextField
            id={id}
            select
            margin="dense"
            label={label}
            value={value}
            onChange={(event) => on_change(event.target.value)}
            variant="outlined"
            className={classes.select_field}
            
          >
            {items.map((option) => (
              <MenuItem key={option} value={option}>
                  {option}
              </MenuItem>
            ))}
          </TextField>
    );
};

LogDialogSelectField.protoTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.object,
    on_change: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};