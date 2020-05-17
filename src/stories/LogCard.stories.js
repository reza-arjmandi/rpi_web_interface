import React from 'react';

import LogCard from '../components/LogCard';

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
    flow_control: 'odd', 
    parity: 'even', 
    stop_bits: '1', 
    character_size: '8',
};

export const Default = () => {
    return <LogCard {...log_card_data} />;
};