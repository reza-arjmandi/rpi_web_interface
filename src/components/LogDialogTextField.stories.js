import React from 'react';

import LogDialogTextField from './LogDialogTextField';

export default {
    component: LogDialogTextField,
    title: 'LogDialogTextField',
    excludeStories: /.*_data$/, 
};

export const text_field_data = {
    id: "ID",
    label: "this is label",
};

export const Default = () => {
    return <LogDialogTextField {...text_field_data} />
}
