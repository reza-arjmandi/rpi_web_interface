import React from 'react';

import {action} from '@storybook/addon-actions';
import AddNewLogDialog from './AddNewLogDialog';

export default {
    component: AddNewLogDialog,
    title: 'AddNewLogDialog',
    excludeStories: /.*_data$/, 
};

export const action_data = {
    on_close : action('on_close'),
};

export const add_new_log_dialog_data = {
    open: true,
};

export const Default = () => {
    return <AddNewLogDialog {...add_new_log_dialog_data} {...action_data} />;
}