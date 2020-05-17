import * as types from '../constants/ActionTypes';

export const open_add_new_log_dialog = () => ({ 
    type: types.OPEN_ADD_NEW_LOG_DIALOG });

export const close_add_new_log_dialog = () => ({ 
    type: types.CLOSE_ADD_NEW_LOG_DIALOG });

export const add_new_device_info = (new_device_info) => ({ 
        type: types.ADD_NEW_LOG,
        new_device_info,
 });
