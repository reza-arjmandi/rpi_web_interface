import {
    FETCH_RECORDING_STATUS_REQUEST,
    FETCH_RECORDING_STATUS_FAILURE,
    FETCH_RECORDING_STATUS_SUCCESS
} from '../constants/ActionTypes';

export default function IsFetchingRecordingStatus(state=false, action) {
    switch(action.type) {
        case FETCH_RECORDING_STATUS_REQUEST :
            return true;
        case FETCH_RECORDING_STATUS_FAILURE :
        case FETCH_RECORDING_STATUS_SUCCESS :
            return false;
        default:
            return state;
    }
}