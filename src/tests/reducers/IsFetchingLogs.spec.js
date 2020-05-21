import IsFetchingLogs from '../../reducers/IsFetchingLogs';
import * as types from '../../constants/ActionTypes';

describe('IsFetchingLogs reducer', () => {

    it('should handle initial state', () => {
        expect(
            IsFetchingLogs(undefined, {})
        ).toEqual(false);
    })

    it('should handle FETCH_LOGS_REQUEST', () => {
        expect(
            IsFetchingLogs(true, { 
                type: types.FETCH_LOGS_REQUEST 
            })
        ).toEqual(true);

        expect(
            IsFetchingLogs(false, {
                type: types.FETCH_LOGS_REQUEST
            })
        ).toEqual(true);
    })

    it('should handle FETCH_LOGS_FAILURE', () => {
        expect(
            IsFetchingLogs(true, { 
                type: types.FETCH_LOGS_FAILURE 
            })
        ).toEqual(false);

        expect(
            IsFetchingLogs(false, {
                type: types.FETCH_LOGS_FAILURE
            })
        ).toEqual(false);
    })

    it('should handle FETCH_LOGS_SUCCESS', () => {
        expect(
            IsFetchingLogs(true, { 
                type: types.FETCH_LOGS_SUCCESS 
            })
        ).toEqual(false);

        expect(
            IsFetchingLogs(false, {
                type: types.FETCH_LOGS_SUCCESS
            })
        ).toEqual(false);
    })

});