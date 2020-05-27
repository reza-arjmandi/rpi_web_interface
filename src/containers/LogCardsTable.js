import { connect } from 'react-redux';
import LogCardsGrid from '../components/LogCardsGrid';
import {
    insert_or_update_log,
    delete_log
} from '../api';

const map_state_to_props = state => ({
    is_fetching: state.IsFetchingLogs,
    cards: state.Logs
});

const map_dispatch_to_props = dispatch => ({
    update_log: (log) => dispatch(insert_or_update_log(log)),
    delete_log: (device) => dispatch(delete_log(device)),
});

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(LogCardsGrid);