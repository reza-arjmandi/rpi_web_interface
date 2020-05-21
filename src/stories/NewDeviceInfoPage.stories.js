import React from 'react';

import NewDeviceInfoPage from '../components/NewDeviceInfoPage';
import { action_data } from './LogDialogTextField.stories';

export default {
    component: NewDeviceInfoPage,
    title: 'NewDeviceInfoPage',
};

export const Default = () => {
    return <NewDeviceInfoPage {...action_data} />;
};