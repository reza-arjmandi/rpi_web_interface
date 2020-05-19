import React from 'react';

import LogCardsGrid from '../components/LogCardsGrid';
import {log_card_data} from './LogCard.stories';

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

export const Default = () => {
    return <LogCardsGrid {...cards_data} />;
};

export const Fetching = () => {
    return <LogCardsGrid is_fetching={true} />;
};