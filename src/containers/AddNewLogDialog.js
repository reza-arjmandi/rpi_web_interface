import { connect } from 'react-redux';
import AddNewLogDialog from "../components/AddNewLogDialog";
import { close_add_new_log_dialog } from '../actions';
import { insert_or_update_log } from '../api';

const map_state_to_props = state => ({
    open: state.AddNewLogDialogVisibility,
});

const map_dispatch_to_props = dispatch => ({
    on_close: () => { dispatch(close_add_new_log_dialog()) },
    add_new_log: (new_device_info) =>  {
            dispatch(insert_or_update_log(new_device_info))
        }
});

export default connect(
    map_state_to_props, 
    map_dispatch_to_props
)(AddNewLogDialog);