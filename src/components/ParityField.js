import React from 'react';

import LogDialogSelectField from './LogDialogSelectField';

export default function ParityField() {
    const [parity, set_parity] = React.useState('none');

    const handle_parity_change = (value) => {
        set_parity(value);
    };

    const parities = [
        "none", "odd", "even",
    ];

    return <LogDialogSelectField
      id="parity"
      label="Parity"
      value={parity}
      on_change={handle_parity_change}
      items={parities}
    />
};