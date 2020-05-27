import Notification from '../../reducers/Notification';
import * as types from '../../constants/ActionTypes';

describe('Notification reducer', () => {
    it('should handle initial state', () => {
        const initial_state = {
            message: '', 
            type:''
        };

        expect(
            Notification(undefined, {})
        ).toEqual(initial_state)
    })

    it('should handle FETCH_LOGS_REQUEST', () => {
        const action = {
            type: types.FETCH_LOGS_REQUEST,
        };

        const expected_result = {
            message: 'Fetching logs...', 
            type:'info'
        };

        expect(
            Notification(undefined, action)
        ).toEqual(expected_result);

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle FETCH_LOGS_FAILURE', () => {
        const action = {
            type: types.FETCH_LOGS_FAILURE,
            error: "this is a error"
        };

        const expected_result = {
            message: 'Fetching of logs failed, this is a error', 
            type:'error'
        };

        expect(
            Notification(undefined, action)
        ).toEqual(expected_result);

        expect(
            Notification({
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

    it('should handle FETCH_RECORDING_STATUS_REQUEST', () => {
        const action = {
            type: types.FETCH_RECORDING_STATUS_REQUEST,
        };

        const expected_result = {
            message: 'Fetching recording status...', 
            type:'info'
        };

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle FETCH_RECORDING_STATUS_FAILURE', () => {
        const action = {
            type: types.FETCH_RECORDING_STATUS_FAILURE,
            error: 'this is err'
        };

        const expected_result = {
            message: `Fetching of recording status failed, ${action.error}`, 
            type:'error'
        };

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle FETCH_RECORDING_STATUS_SUCCESS', () => {
        const action = {
            type: types.FETCH_RECORDING_STATUS_SUCCESS
        };

        const expected_result = {
            message: 'Fetching of recording status succeeded.', 
            type:'success'
        };

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle SEND_NEW_LOG_REQUEST', () => {
        const action = {
            type: types.SEND_NEW_LOG_REQUEST
        };

        const expected_result = {
            message: 'Insert or update log...',
            type:'info'
        };

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle SEND_NEW_LOG_FAILED', () => {
        const action = {
            type: types.SEND_NEW_LOG_FAILURE
        };

        const expected_result = {
            message: `Insert or update log failed, ${action.error}`,
            type:'error'
        };

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

    it('should handle SEND_NEW_LOG_SUCCESS', () => {
        const action = {
            type: types.SEND_NEW_LOG_SUCCESS
        };

        const expected_result = {
            message: 'Insert or update log succeeded.',
            type:'success'
        };

        expect(
            Notification({
                message: 'random message', 
                type:'random type'
            }, action)
        ).toEqual(expected_result);
    })

});