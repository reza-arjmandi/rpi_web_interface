import React from 'react';

import LogDialogSelectField from './LogDialogSelectField'

export default function BaudRateField(){
    const [baud_rate, set_baud_rate] = React.useState(9600);

    const handle_baud_rate_change = (value) => {
        set_baud_rate(value);
    };

    const baud_rates = [
        110, 300, 600, 1200, 2400, 4800, 9600, 14400, 
        19200, 38400, 57600, 115200, 128000, 256000,
    ];

    return <LogDialogSelectField
      id="baud_rate"
      label="Baud Rate"
      value={baud_rate}
      on_change={handle_baud_rate_change}
      items={baud_rates}
    />;
};