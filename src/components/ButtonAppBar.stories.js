import React from 'react';

import ButtonAppBar from './ButtonAppBar';
import {record_started_data, record_not_started_data} from './RecordLogButton.stories';

export default {
    component: ButtonAppBar,
    title: 'ButtonAppBar',
};

export const RecordStarted = () => {
    return <ButtonAppBar {...record_started_data} />;
}

export const RecordNotStarted = () => {
    return <ButtonAppBar {...record_not_started_data} />;
}