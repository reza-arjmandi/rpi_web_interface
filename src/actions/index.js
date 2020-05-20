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

export const close_notification = () => ({
    type: types.CLOSE_NOTIFICATION,
});

export const add_new_device_info = (new_device_info) => ({ 
    type: types.ADD_NEW_LOG,
    new_device_info,
});