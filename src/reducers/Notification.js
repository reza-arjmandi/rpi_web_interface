import {
    FETCH_LOGS_FAILURE,
    FETCH_LOGS_SUCCESS,
    CLOSE_NOTIFICATION
} from '../constants/ActionTypes';

const initial_state = {
    open: false, 
    message: '', 
    type:''
};

export default function Notification(state=initial_state, action) {
    switch(action.type) {
        case FETCH_LOGS_FAILURE:
            return {
                open: true, 
                message: `Fetching of logs failed, ${action.error}`, 
                type:'error'
            };
        case FETCH_LOGS_SUCCESS:
            return {
                open: true, 
                message: 'Fetching of logs succeeded', 
                type:'success'
            };
        case CLOSE_NOTIFICATION:
            return initial_state;
        default:
            return state;
    }
};