import React from 'react';

import RecordLogButton from '../components/RecordLogButton';
import { action } from '@storybook/addon-actions';

export default {
    component: RecordLogButton,
    title: 'RecordLogButton',
    excludeStories: /.*_data$/,
};

export const record_started_data = {
    is_fetching: false,
    is_record_started: true,
};

export const record_not_started_data = {
    is_fetching: false,
    is_record_started: false,
};

export const fetching_data = {
    is_fetching: true,
};

export const actions_data = {
    start_recording: action('start_recording'),
    stop_recording: action('stop_recording'),
};

export const RecordStarted = () => {
    return <RecordLogButton {...record_started_data} {...actions_data}/>;
}

export const RecordNotStarted = () => {
    return <RecordLogButton {...record_not_started_data} {...actions_data}/>;
}

export const Fetching = () => {
    return <RecordLogButton {...fetching_data} {...actions_data}/>;
}