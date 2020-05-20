import Notification from '../reducers/Notification';
import * as types from '../constants/ActionTypes';

describe('Notification reducer', () => {
    it('should handle initial state', () => {
        const initial_state = {
            open: false, 
            message: '', 
            type:''
        };

        expect(
            Notification(undefined, {})
        ).toEqual(initial_state)
    })

    it('should handle FETCH_LOGS_FAILURE', () => {
        const action = {
            type: types.FETCH_LOGS_FAILURE,
            error: "this is a error"
        };

        const expected_result = {
            open: true, 
            message: 'Fetching of logs failed, this is a error', 
            type:'error'
        };

        expect(
            Notification(undefined, action)
        ).toEqual(expected_result);

        expect(
            Notification({
                open: true, 
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle FETCH_LOGS_SUCCESS', () => {
        const action = {
            type: types.FETCH_LOGS_SUCCESS,
        };

        const expected_result = {
            open: true, 
            message: 'Fetching of logs succeeded', 
            type:'success'
        };

        expect(
            Notification(undefined, action)
        ).toEqual(expected_result);

        expect(
            Notification({
                open: true, 
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle CLOSE_NOTIFICATION', () => {
        const action = {
            type: types.CLOSE_NOTIFICATION,
        };

        const initial_state = {
            open: false, 
            message: '', 
            type:''
        };

        expect(
            Notification({
                open: true, 
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(initial_state);
    })
});