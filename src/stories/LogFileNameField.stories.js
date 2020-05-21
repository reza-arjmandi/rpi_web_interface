import React from 'react';

import LogFileNameField from '../components/LogFileNameField';
import { action_data } from './LogDialogTextField.stories';

export default {
    component: LogFileNameField,
    title: 'LogFileNameField',
};

export const Default = () => {
    return <LogFileNameField {...action_data} />;
};