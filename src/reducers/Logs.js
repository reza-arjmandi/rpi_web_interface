import {
    FETCH_LOGS_SUCCESS
} from '../constants/ActionTypes';

export default function Logs(state=[], action) {
    switch(action.type) {
        case FETCH_LOGS_SUCCESS:
            return action.response.cards;
        default:
            return state;
    }
};
