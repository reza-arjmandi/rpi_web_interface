import {
    FETCH_LOGS_SUCCESS,
    FETCH_LOGS_FAILURE
} from '../constants/ActionTypes';

export default function Logs(state=[], action) {
    switch(action.type) {
        case FETCH_LOGS_SUCCESS:
            return action.response.cards;
        case FETCH_LOGS_FAILURE:
            return state;
        default:
            return state;
    }
};
