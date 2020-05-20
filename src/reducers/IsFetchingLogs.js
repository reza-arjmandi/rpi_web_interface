import {
    FETCH_LOGS_REQUEST,
    FETCH_LOGS_FAILURE,
    FETCH_LOGS_SUCCESS
} from '../constants/ActionTypes';

export default function IsFetchingLogs(state = false, action) {
    switch(action.type) {
        case FETCH_LOGS_REQUEST :
            return true;
        case FETCH_LOGS_FAILURE :
        case FETCH_LOGS_SUCCESS :
            return false;
        default:
            return state;
    }
};