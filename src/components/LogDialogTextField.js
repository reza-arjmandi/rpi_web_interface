import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default function LogDialogTextField({id, label, type, default_value}) {
    return (
        <TextField
            margin="dense"
            id={id}
            label={label}
            variant="outlined"
            required
            type={type}
            defaultValue={default_value}
            fullWidth
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