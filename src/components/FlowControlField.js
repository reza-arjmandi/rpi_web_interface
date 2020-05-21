import React from 'react';

import LogDialogSelectField from './LogDialogSelectField';

export default function FlowControlField({ on_value_change }) {
    const [flow_control, set_flow_control] = React.useState('none');
    const id = "flow_control";
    const handle_flow_control_change = (value) => {
        set_flow_control(value);
        on_value_change({
            id,
            value,
        });
    };

    const flow_controls = [
        "none", "software", "hardware",
    ];

    return <LogDialogSelectField
      id={id}
      label="Flow Control"
      value={flow_control}
      on_change={handle_flow_control_change}
      items={flow_controls}
    />;
};