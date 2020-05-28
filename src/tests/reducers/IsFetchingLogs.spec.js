import IsFetchingLogs from '../../reducers/IsFetchingLogs';
import * as types from '../../constants/ActionTypes';
import ExpectGenerator from './ExpectGenerator';

const setup = () => {
    const expectation = ExpectGenerator(IsFetchingLogs);
    return {
        expectation,
    };
};

describe('IsFetchingLogs reducer', () => {

    it('should handle initial state', () => {
        const { expectation } = setup();
        expectation(undefined, {}, false);
    })

    it('should handle FETCH_LOGS_REQUEST', () => {
        const { expectation } = setup();
        expectation(true, { type: types.FETCH_LOGS_REQUEST }, true);
        expectation(false, { type: types.FETCH_LOGS_REQUEST }, true);
    })

    it('should handle FETCH_LOGS_FAILURE', () => {
        const { expectation } = setup();
        expectation(true, { type: types.FETCH_LOGS_FAILURE }, false);
        expectation(false, { type: types.FETCH_LOGS_FAILURE }, false);
    })

    it('should handle FETCH_LOGS_SUCCESS', () => {
        const { expectation } = setup();
        expectation(true, { type: types.FETCH_LOGS_SUCCESS }, false);
        expectation(false, { type: types.FETCH_LOGS_SUCCESS }, false);
    })

});