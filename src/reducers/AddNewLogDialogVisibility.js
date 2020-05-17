import { 
    OPEN_ADD_NEW_LOG_DIALOG, 
    CLOSE_ADD_NEW_LOG_DIALOG 
} from '../constants/ActionTypes';

export default function AddNewLogDialogVisibility(state = false, action) {
    switch(action.type) {
        case OPEN_ADD_NEW_LOG_DIALOG :
            return true;
        case CLOSE_ADD_NEW_LOG_DIALOG :
                return false;
        default:
            return state;
    }
};