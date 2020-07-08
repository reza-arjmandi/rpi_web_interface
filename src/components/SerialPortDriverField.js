import React from 'react';

import LogDialogTextField from './LogDialogTextField';

export default function SerialPortDriverField({ on_value_change }) {
  return <LogDialogTextField 
        id="driver" 
        label="Serial Port Driver" 
        on_value_change={on_value_change}
    />;
};