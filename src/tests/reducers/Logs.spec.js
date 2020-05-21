import Logs from '../../reducers/Logs';
import * as types from '../../constants/ActionTypes';

describe('Logs reducer', () => {

    it('should handle initial state', () => {
        expect(
            Logs(undefined, {})
        ).toEqual([]);
    })

    it('should handle FETCH_LOGS_SUCCESS', () => {
        const logs = [
            'card1',
            'card2',
        ];

        const action = {
            type: types.FETCH_LOGS_SUCCESS,
            response: {cards: logs}
        };

        expect(
            Logs([], action)
        ).toEqual(logs);

        expect(
            Logs(['card2', 'card3'], action)
        ).toEqual(logs);
    })

    it('should handle FETCH_LOGS_FAILURE', () => {
        const action = {
            type: types.FETCH_LOGS_FAILURE,
            error: 'this is error'
        };

        expect(
            Logs([], action)
        ).toEqual([]);

        expect(
            Logs(['card1', 'card2'], action)
        ).toEqual(['card1', 'card2']);
    })

});