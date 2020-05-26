import { connect } from 'react-redux';
import LogCardsGrid from '../components/Notification';

const map_state_to_props = state => ({
    message: state.Notification.message,
    type: state.Notification.type,
});

export default connect(
    map_state_to_props,
    null
)(LogCardsGrid);