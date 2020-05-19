import { connect } from 'react-redux';
import LogCardsGrid from '../components/LogCardsGrid';

const map_state_to_props = state => ({
    is_fetching: state.IsFetchingLogs,
    cards: state.Logs
});

export default connect(
    map_state_to_props,
    null
)(LogCardsGrid);