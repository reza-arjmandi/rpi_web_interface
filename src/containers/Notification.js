import { connect } from 'react-redux';
import LogCardsGrid from '../components/Notification';

import {close_notification} from '../actions';

const map_state_to_props = state => ({
    open: state.Notification.open,
    message: state.Notification.message,
    type: state.Notification.type,
});

const map_dispatch_to_props = dispatch => ({
    close_notification: () => { dispatch(close_notification()) },
});

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(LogCardsGrid);