import React from 'react';

import {action} from '@storybook/addon-actions';

import LogDialogTextField from '../components/LogDialogTextField';

export default {
    component: LogDialogTextField,
    title: 'LogDialogTextField',
    excludeStories: /.*_data$/, 
};

export const text_field_data = {
    id: "ID",
    label: "this is label",
};

export const action_data = {
    on_value_change : action('on_value_change'),
};

export const Default = () => {
    return <LogDialogTextField {...text_field_data} {...action_data} />
}
