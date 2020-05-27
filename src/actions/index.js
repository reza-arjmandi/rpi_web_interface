import * as types from '../constants/ActionTypes';

export const open_add_new_log_dialog = () => ({ 
    type: types.OPEN_ADD_NEW_LOG_DIALOG 
});

export const close_add_new_log_dialog = () => ({ 
    type: types.CLOSE_ADD_NEW_LOG_DIALOG 
});

export const fetch_logs_request = () => ({
    type: types.FETCH_LOGS_REQUEST,
    description: 'Fetching logs...'
});

export const fetch_logs_failure = (error) => ({
    type: types.FETCH_LOGS_FAILURE,
    description: 'Fetching of logs failed.',
    error
});

export const fetch_logs_success = (response) => ({
    type: types.FETCH_LOGS_SUCCESS,
    description: 'Fetching of logs succeeded.',
    response
});

export const fetch_recording_status_request = () => ({
    type: types.FETCH_RECORDING_STATUS_REQUEST,
    description: 'Fetching recording status...'
});

export const fetch_recording_status_failure = (error) => ({
    type: types.FETCH_RECORDING_STATUS_FAILURE,
    description: 'Fetching of recording status failed.',
    error
});

export const fetch_recording_status_success = (is_recording_started) => ({
    type: types.FETCH_RECORDING_STATUS_SUCCESS,
    description: 'Fetching of recording status succeeded.',
    is_recording_started
});

export const insert_or_update_log_request = () => ({ 
    type: types.INSERT_OR_UPDATE_LOG_REQUEST,
    description: 'Inserting or updating a log...'
});

export const insert_or_update_log_success = () => ({ 
    type: types.INSERT_OR_UPDATE_LOG_SUCCESS,
    description: 'Inserting or updating of the log succeeded.'
});

export const insert_or_update_failure = (error) => ({ 
    type: types.INSERT_OR_UPDATE_LOG_FAILURE,
    description: 'Inserting or updating of the log failed.',
    error
});

export const delete_log_request = () => ({ 
    type: types.DELETE_LOG_REQUEST,
    description: 'Deleting a log...'
});

export const delete_log_success = () => ({ 
    type: types.DELETE_LOG_SUCCESS,
    description: 'Deleting of the log succeeded.'
});

export const delete_log_failure = (error) => ({ 
    type: types.DELETE_LOG_FAILURE,
    description: 'Deleting of the log failed.',
    error
});