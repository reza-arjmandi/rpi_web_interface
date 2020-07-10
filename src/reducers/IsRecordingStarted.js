import {
    FETCH_RECORDING_STATUS_REQUEST,
    FETCH_RECORDING_STATUS_FAILURE,
    FETCH_RECORDING_STATUS_SUCCESS
} from '../constants/ActionTypes';

export default function IsRecordingStarted(state = false, action) {
    switch(action.type) {
        case FETCH_RECORDING_STATUS_SUCCESS:
            return action.is_recording;
        case FETCH_RECORDING_STATUS_REQUEST:
        case FETCH_RECORDING_STATUS_FAILURE:
        default:
            return state;
    }
}