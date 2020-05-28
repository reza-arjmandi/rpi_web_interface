import { connect } from 'react-redux';
import ButtonAppBar from '../components/ButtonAppBar';
import { start_recording } from '../api'

const map_state_to_props = state => ({
    is_fetching: state.IsFetchingRecordingStatus,
    is_record_started: state.IsRecordingStarted
});

const map_dispatch_to_props = dispatch => ({
    start_recording: () => dispatch(start_recording()),
});

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(ButtonAppBar);