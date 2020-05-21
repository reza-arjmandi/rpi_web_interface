import AddNewLogDialogVisibility from '../../reducers/AddNewLogDialogVisibility';
import * as types from '../../constants/ActionTypes';

describe('AddNewLogDialogVisibility reducer', () => {
    it('should handle initial state', () => {
        expect(
            AddNewLogDialogVisibility(undefined, {})
        ).toEqual(false);
    })

    it('should handle OPEN_ADD_NEW_LOG_DIALOG', () => {
        expect(
            AddNewLogDialogVisibility(false, {
                type: types.OPEN_ADD_NEW_LOG_DIALOG
            })
        ).toEqual(true);

        expect(
            AddNewLogDialogVisibility(true, {
                type: types.OPEN_ADD_NEW_LOG_DIALOG
            })
        ).toEqual(true);
    })

    it('should handle CLOSE_ADD_NEW_LOG_DIALOG', () => {
        expect(
            AddNewLogDialogVisibility(true, {
                type: types.CLOSE_ADD_NEW_LOG_DIALOG
            })
        ).toEqual(false);

        expect(
            AddNewLogDialogVisibility(false, {
                type: types.CLOSE_ADD_NEW_LOG_DIALOG
            })
        ).toEqual(false);
    })

});