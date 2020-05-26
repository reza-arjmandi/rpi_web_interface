import {
    FETCH_LOGS_FAILURE,
    FETCH_LOGS_SUCCESS,
    FETCH_RECORDING_STATUS_FAILURE,
    FETCH_RECORDING_STATUS_SUCCESS,
    SEND_NEW_LOG_REQUEST,
    SEND_NEW_LOG_FAILURE,
    SEND_NEW_LOG_SUCCESS
} from '../constants/ActionTypes';

const initial_state = {
    message: '', 
    type:''
};

export default function Notification(state=initial_state, action) {
    switch(action.type) {
        case FETCH_LOGS_FAILURE:
            return {
                message: `Fetching of logs failed, ${action.error}`, 
                type: 'error'
            };
        case FETCH_LOGS_SUCCESS:
            return {
                message: 'Fetching of logs succeeded', 
                type:'success'
            };
        case FETCH_RECORDING_STATUS_FAILURE:
            return {
                message: `Fetching of recording status failed, ${action.error}`, 
                type:'error'
            };
        case FETCH_RECORDING_STATUS_SUCCESS:
            return {
                message: 'Fetching of recording status succeeded.',
                type:'success'
            };
        case SEND_NEW_LOG_REQUEST:
            return {
                message: 'Adding new log...',
                type:'info'
            };
        case SEND_NEW_LOG_FAILURE:
            return {
                message: `Adding new log was failed, ${action.error}`,
                type: 'error'
            };
        case SEND_NEW_LOG_SUCCESS:
            return {
                message: 'Adding new log succeeded.',
                type: 'success'
            };
        default:
            return state;
    }
};