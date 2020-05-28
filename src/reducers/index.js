import { combineReducers } from 'redux';
import AddNewLogDialogVisibility from './AddNewLogDialogVisibility';
import Logs from './Logs';
import IsFetchingLogs from './IsFetchingLogs';
import Notification from './Notification';
import IsRecordingStarted from './IsRecordingStarted';
import IsFetchingRecordingStatus from './IsFetchingRecordingStatus';

const root_reducer = combineReducers({ 
    AddNewLogDialogVisibility,
    Logs,
    IsFetchingLogs,
    Notification,
    IsRecordingStarted,
    IsFetchingRecordingStatus
 });

export default root_reducer;