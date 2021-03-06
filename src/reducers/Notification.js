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
    DOWNLOAD_LOG_FILE_REQUEST,
    DOWNLOAD_LOG_FILE_FAILURE,
    DOWNLOAD_LOG_FILE_SUCCESS,
    START_RECORDING_REQUEST,
    START_RECORDING_FAILURE,
    START_RECORDING_SUCCESS,
    STOP_RECORDING_REQUEST,
    STOP_RECORDING_FAILURE,
    STOP_RECORDING_SUCCESS,
} from '../constants/ActionTypes';

const initial_state = {
    message: '', 
    type:''
};

export default function Notification(state=initial_state, action) {
    switch(action.type) {
        case FETCH_LOGS_REQUEST:
        case FETCH_RECORDING_STATUS_REQUEST:
        case INSERT_OR_UPDATE_LOG_REQUEST:
        case DELETE_LOG_REQUEST:
        case DOWNLOAD_LOG_FILE_REQUEST:
        case START_RECORDING_REQUEST:
        case STOP_RECORDING_REQUEST:
            return {
                message: action.description, 
                type: 'info'
            };
        case FETCH_LOGS_FAILURE:
        case FETCH_RECORDING_STATUS_FAILURE:
        case INSERT_OR_UPDATE_LOG_FAILURE:
        case DELETE_LOG_FAILURE:
        case DOWNLOAD_LOG_FILE_FAILURE:
        case START_RECORDING_FAILURE:
        case STOP_RECORDING_FAILURE:
            return {
                message: `${action.description} ${action.error}`, 
                type: 'error'
            };
        case FETCH_LOGS_SUCCESS:
        case FETCH_RECORDING_STATUS_SUCCESS:
        case INSERT_OR_UPDATE_LOG_SUCCESS:
        case DELETE_LOG_SUCCESS:
        case DOWNLOAD_LOG_FILE_SUCCESS:
        case START_RECORDING_SUCCESS:
        case STOP_RECORDING_SUCCESS:
            return {
                message: action.description, 
                type:'success'
            };
        default:
            return state;
    }
};