import React from 'react';

import LogCardsGrid from '../components/LogCardsGrid';
import {log_card_data} from './LogCard.stories';
import {action} from '@storybook/addon-actions';

export default {
    component: LogCardsGrid,
    title: 'LogCardsGrid',
    excludeStories: /.*_data$/,
};

export const cards_data = {
    is_fetching: false,

    cards: [
        log_card_data, 
        log_card_data, 
        log_card_data, 
        log_card_data,
        log_card_data,
        log_card_data,
        log_card_data,
    ],
};

export const actions_data = {
    update_log: action('update_log'),
    delete_log: action('delete_log'),
}

export const Default = () => {
    return <LogCardsGrid {...cards_data} {...actions_data} />;
};

export const Fetching = () => {
    return <LogCardsGrid is_fetching={true} {...actions_data} />;
};