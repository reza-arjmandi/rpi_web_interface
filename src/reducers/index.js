import { combineReducers } from 'redux';
import AddNewLogDialogVisibility from './AddNewLogDialogVisibility';
import Logs from './Logs';
import IsFetchingLogs from './IsFetchingLogs';
import Notification from './Notification';

const root_reducer = combineReducers({ 
    AddNewLogDialogVisibility,
    Logs,
    IsFetchingLogs,
    Notification
 });

export default root_reducer;