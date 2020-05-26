import * as types from '../constants/ActionTypes';

export const open_add_new_log_dialog = () => ({ 
    type: types.OPEN_ADD_NEW_LOG_DIALOG 
});

export const close_add_new_log_dialog = () => ({ 
    type: types.CLOSE_ADD_NEW_LOG_DIALOG 
});

export const fetch_logs_request = () => ({
    type: types.FETCH_LOGS_REQUEST
});

export const fetch_logs_failure = (error) => ({
    type: types.FETCH_LOGS_FAILURE,
    error
});

export const fetch_logs_success = (response) => ({
    type: types.FETCH_LOGS_SUCCESS,
    response
});

export const fetch_recording_status_request = () => ({
    type: types.FETCH_RECORDING_STATUS_REQUEST
});

export const fetch_recording_status_failure = (error) => ({
    type: types.FETCH_RECORDING_STATUS_FAILURE,
    error
});

export const fetch_recording_status_success = (is_recording_started) => ({
    type: types.FETCH_RECORDING_STATUS_SUCCESS,
    is_recording_started
});

export const send_new_log_request = () => ({ 
    type: types.SEND_NEW_LOG_REQUEST,
});

export const send_new_log_success = () => ({ 
    type: types.SEND_NEW_LOG_SUCCESS,
});

export const send_new_log_failure = (error) => ({ 
    type: types.SEND_NEW_LOG_FAILURE,
    error
});