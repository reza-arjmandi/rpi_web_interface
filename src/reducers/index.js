import { combineReducers } from 'redux';
import AddNewLogDialogVisibility from './AddNewLogDialogVisibility';
import Logs from './Logs';

const root_reducer = combineReducers({ 
    AddNewLogDialogVisibility,
    Logs,
 });

export default root_reducer;