import AddNewLogDialogVisibility from '../../reducers/AddNewLogDialogVisibility';
import * as types from '../../constants/ActionTypes';
import ExpectGenerator from './ExpectGenerator';

const setup = () => {
    const expectation = ExpectGenerator(AddNewLogDialogVisibility);
    return {
        expectation,
    };
};

describe('AddNewLogDialogVisibility reducer', () => {
    it('should handle initial state', () => {
        const { expectation } = setup();
        expectation(undefined, {}, false);
    })

    it('should handle OPEN_ADD_NEW_LOG_DIALOG', () => {
        const { expectation } = setup();
        expectation(false, { type: types.OPEN_ADD_NEW_LOG_DIALOG }, true);
        expectation(true, { type: types.OPEN_ADD_NEW_LOG_DIALOG }, true);
    })

    it('should handle CLOSE_ADD_NEW_LOG_DIALOG', () => {
        const { expectation } = setup();
        expectation(false, { type: types.CLOSE_ADD_NEW_LOG_DIALOG }, false);
        expectation(true, { type: types.CLOSE_ADD_NEW_LOG_DIALOG }, false);
    })

});