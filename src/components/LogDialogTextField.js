import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text_field: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function LogDialogTextField({id, label, type, default_value}) {
    const classes = useStyles();
    return (
        <TextField
            margin="dense"
            id={id}
            label={label}
            variant="outlined"
            className={classes.text_field}
            required
            type={type}
            defaultValue={default_value}
        />
    );
}

LogDialogTextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.object,
    default_value: PropTypes.object,
};

LogDialogTextField.defaultProps = {
    type: "text",
};