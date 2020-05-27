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
    serial_port_driver: '/dev/driver1',
    log_file_name: '/home/folder/log.txt',
    baud_rate: '9600', 
    flow_control: 'hardware', 
    parity: 'even', 
    stop_bits: '1', 
    character_size: '8',
};

export const actions_data = {
    update_log: action('update_log'),
};

export const Default = () => {
    return <LogCard {...log_card_data} {...actions_data}/>;
};