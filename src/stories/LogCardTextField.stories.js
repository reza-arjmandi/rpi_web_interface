import React from 'react';

import LogCardTextField from '../components/LogCardTextField';
import {action} from '@storybook/addon-actions';

export default {
    component: LogCardTextField,
    title: 'LogCardTextField',
    excludeStories: /.*_data$/,
};

export const card_data = {
    id: 'ID',
    label: 'label',
    default_value: 'default value'
};

export const action_data = {
    on_value_change : action('on_value_change'),
};

export const Default = () => {
    return <LogCardTextField {...card_data} {...action_data} />;
};