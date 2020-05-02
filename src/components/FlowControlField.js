import React from 'react';

import LogDialogSelectField from './LogDialogSelectField';

export default function FlowControlField() {
    const [flow_control, set_flow_control] = React.useState('none');

    const handle_flow_control_change = (value) => {
        set_flow_control(value);
    };

    const flow_controls = [
        "none", "software", "hardware",
    ];

    return <LogDialogSelectField
      id="flow_control"
      label="Flow Control"
      value={flow_control}
      on_change={handle_flow_control_change}
      items={flow_controls}
    />;
};