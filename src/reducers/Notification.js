import {
    FETCH_LOGS_REQUEST,
    FETCH_LOGS_FAILURE,
    FETCH_LOGS_SUCCESS,
    FETCH_RECORDING_STATUS_REQUEST,
    FETCH_RECORDING_STATUS_FAILURE,
    FETCH_RECORDING_STATUS_SUCCESS,
    INSERT_OR_UPDATE_LOG_REQUEST,
    INSERT_OR_UPDATE_LOG_FAILURE,
    INSERT_OR_UPDATE_LOG_SUCCESS,
    DELETE_LOG_REQUEST,
    DELETE_LOG_FAILURE,
    DELETE_LOG_SUCCESS,
} from '../constants/ActionTypes';

const initial_state = {
    message: '', 
    type:''
};

export default function Notification(state=initial_state, action) {
    switch(action.type) {
        case FETCH_LOGS_REQUEST:
            return {
                message: 'Fetching logs...', 
                type: 'info'
            };
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
        case FETCH_RECORDING_STATUS_REQUEST:
            return {
                message: 'Fetching recording status...', 
                type:'info'
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
        case INSERT_OR_UPDATE_LOG_REQUEST:
            return {
                message: 'Insert or update log...',
                type:'info'
            };
        case INSERT_OR_UPDATE_LOG_FAILURE:
            return {
                message: `Insert or update of log failed, ${action.error}`,
                type: 'error'
            };
        case INSERT_OR_UPDATE_LOG_SUCCESS:
            return {
                message: 'Insert or update of log succeeded.',
                type: 'success'
            };
        case DELETE_LOG_REQUEST:
            return {
                message: 'Deleting log...',
                type: 'info'
            };
        case DELETE_LOG_FAILURE:
            return {
                message: `Deleting of log failed, ${action.error}`,
                type: 'error'
            };
        case DELETE_LOG_SUCCESS:
            return {
                message: 'Deleting of log succeeded.',
                type: 'success'
            };
        default:
            return state;
    }
};