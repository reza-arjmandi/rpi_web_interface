import { connect } from 'react-redux';
import LogCardsGrid from '../components/LogCardsGrid';
import {
    update_log,
    delete_log,
    download_log_file,
} from '../api';

const map_state_to_props = state => ({
    is_fetching: state.IsFetchingLogs,
    cards: state.Logs
});

const map_dispatch_to_props = dispatch => ({
    update_log: (device_name, log) => dispatch(update_log(device_name, log)),
    delete_log: (device) => dispatch(delete_log(device)),
    download_log: (device) => dispatch(download_log_file(device)),
});

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(LogCardsGrid);