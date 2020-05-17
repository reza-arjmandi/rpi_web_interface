import { connect } from 'react-redux';
import AddLogButton from "../components/AddLogButton";
import { open_add_new_log_dialog } from "../actions";

const map_dispatch_to_props = dispatch => ({
    onAddLog: () => { dispatch(open_add_new_log_dialog()) },
});

export default connect(
    null,
    map_dispatch_to_props
)(AddLogButton);