import React from 'react';

import LogDialogTextField from './LogDialogTextField';

export default function DeviceNameField({ on_value_change }) {
    return <LogDialogTextField 
        id="device_name" 
        label="Device Name" 
        on_value_change={on_value_change}
    />;
};