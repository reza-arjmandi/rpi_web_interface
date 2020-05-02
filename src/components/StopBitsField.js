import React from 'react';

import LogDialogSelectField from './LogDialogSelectField';

export default function StopBitsField() {
    const [stop_bits, set_stop_bits] = React.useState(1);

    const handle_stop_bits_change = (value) => {
        set_stop_bits(value);
    };

    const stop_bits_type = [
        1, 1.5, 2,
    ];
    
    return <LogDialogSelectField
      id="stop_bits"
      label="Stop Bits"
      value={stop_bits}
      on_change={handle_stop_bits_change}
      items={stop_bits_type}
    />;
};