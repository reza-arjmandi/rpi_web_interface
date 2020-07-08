import React from 'react';

import LogCard from '../components/LogCard';
import {action} from '@storybook/addon-actions';

export default {
    component: LogCard,
    title: 'LogCard',
    excludeStories: /.*_data$/,
};

export const log_card_data = {
    device_name: 'Module Name',
    driver: '/dev/driver1',
    log_file: '/home/folder/log.txt',
    baud_rate: '9600', 
    flow_control: 'hardware', 
    parity: 'even', 
    stop_bits: '1', 
    character_size: '8',
};

export const actions_data = {
    update_log: action('update_log'),
    delete_log: action('delete_log'),
    download_log: action('download_log'),
};

export const Default = () => {
    return <LogCard {...log_card_data} {...actions_data}/>;
};