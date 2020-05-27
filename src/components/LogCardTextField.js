import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default function LogCardTextField({
    id, label, default_value, on_value_change}) {

    const [read_only, set_read_only] = useState(true);

    const double_click_handler = (event) => {
        set_read_only(false);
    };

    const accept_handler = (event) => {
        if(event.keyCode === 13 && event.target.value !== "") {
            set_read_only(true);
            on_value_change({
                    id,
                    value: event.target.value,
            });
        }
    };

    return (
        <TextField 
            id={id} 
            label={label}
            defaultValue={default_value}
            onDoubleClick={double_click_handler} 
            onKeyDown={accept_handler}
            InputProps={{
                readOnly: read_only,
            }}
            fullWidth
          />
    );
}

LogCardTextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    on_value_change: PropTypes.func.isRequired
};