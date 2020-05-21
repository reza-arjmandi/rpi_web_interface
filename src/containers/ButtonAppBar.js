import { connect } from 'react-redux';
import ButtonAppBar from '../components/ButtonAppBar';

const map_state_to_props = state => ({
    is_record_started: state.IsRecordingStarted
});

export default connect(
    map_state_to_props,
    null
)(ButtonAppBar);