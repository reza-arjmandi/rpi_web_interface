import React from 'react';
import { action } from '@storybook/addon-actions';

import AddLogButton from './AddLogButton';

export default {
    component: AddLogButton,
    title: 'AddLogButton',
    excludeStories: /.*_data$/, 
};

export const actions_data = {
    onAddLog: action('onAddLog'),
};

export const Default = () => {
    return <AddLogButton {...actions_data}/>;
};