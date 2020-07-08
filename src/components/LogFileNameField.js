import React from 'react';

import LogDialogTextField from './LogDialogTextField';

export default function LogFileNameField({ on_value_change }) {
    return <LogDialogTextField 
        id="log_file" 
        label="Log File Name" 
        on_value_change={on_value_change}
    />;
};