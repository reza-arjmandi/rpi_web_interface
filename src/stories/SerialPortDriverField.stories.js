import React from 'react';

import SerialPortDriverField from '../components/SerialPortDriverField';
import { action_data } from './LogDialogTextField.stories';

export default {
    component: SerialPortDriverField,
    title: 'SerialPortDriverField',
};

export const Default = () => {
    return <SerialPortDriverField {...action_data} />;
};