import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

describe('serial port logger actions', () => {
    
    it('open_add_new_log_dialog should create OPEN_ADD_NEW_LOG_DIALOG action', 
    () => {
        expect(actions.open_add_new_log_dialog()).toEqual({
            type: types.OPEN_ADD_NEW_LOG_DIALOG
        });
    })

    it('close_add_new_log_dialog should create CLOSE_ADD_NEW_LOG_DIALOG action'
    , () => {
        expect(actions.close_add_new_log_dialog()).toEqual({
            type: types.CLOSE_ADD_NEW_LOG_DIALOG
        });
    })

    it('fetch_logs_request should create FETCH_LOGS_REQUEST action', () => {
        expect(actions.fetch_logs_request()).toEqual({
            type: types.FETCH_LOGS_REQUEST
        });
    })

    it('fetch_logs_failure should create FETCH_LOGS_FAILURE action', () => {
        expect(actions.fetch_logs_failure("this is a err")).toEqual({
            type: types.FETCH_LOGS_FAILURE,
            error: "this is a err"
        });
    })

    it('fetch_logs_success should create FETCH_LOGS_SUCCESS action', () => {
        expect(actions.fetch_logs_success("this is a response")).toEqual({
            type: types.FETCH_LOGS_SUCCESS,
            response: "this is a response"
        });
    })

    it('fetch_recording_status_request should \
create FETCH_RECORDING_STATUS_REQUEST', 
    () => {
        expect(actions.fetch_recording_status_request()).toEqual({
            type: types.FETCH_RECORDING_STATUS_REQUEST,
        });
    })

    it('fetch_recording_status_failure should careate \
FETCH_RECORDING_STATUS_FAILURE', () => {
        expect(actions.fetch_recording_status_failure('this is err')).toEqual({
            type:types.FETCH_RECORDING_STATUS_FAILURE,
            error: 'this is err'
        })
    })

    it('fetch_recording_status_success should careate \
FETCH_RECORDING_STATUS_SUCCESS', () => {
        expect(actions.fetch_recording_status_success(true)).toEqual({
            type: types.FETCH_RECORDING_STATUS_SUCCESS,
            is_recording_started: true
        });

        expect(actions.fetch_recording_status_success(false)).toEqual({
            type: types.FETCH_RECORDING_STATUS_SUCCESS,
            is_recording_started: false
        });
    })

    it('insert_or_update_log_request should create \
INSERT_OR_UPDATE_LOG_REQUEST', () => {
        expect(actions.insert_or_update_log_request()).toEqual({
            type: types.INSERT_OR_UPDATE_LOG_REQUEST,
        });
    });

    it('insert_or_update_log_success should create INSERT_OR_UPDATE_LOG_SUCCESS', () => {
        expect(actions.insert_or_update_log_success()).toEqual({
            type: types.INSERT_OR_UPDATE_LOG_SUCCESS,
        });
    });

    it('insert_or_update_failure should create \
INSERT_OR_UPDATE_LOG_FAILURE', () => {
        expect(actions.insert_or_update_failure('this is err')).toEqual({
            type: types.INSERT_OR_UPDATE_LOG_FAILURE,
            error: 'this is err'
        });
    });

    it('delete_log_request should create DELETE_LOG_REQUEST', 
    () => {
        expect(actions.delete_log_request()).toEqual({
            type: types.DELETE_LOG_REQUEST
        });
    })

    it('delete_log_success should create DELETE_LOG_SUCCESS', () => {
        expect(actions.delete_log_success()).toEqual({
            type: types.DELETE_LOG_SUCCESS,
        });
    })

    it('delete_log_failure should create DELETE_LOG_FAILURE', () => {
        expect(actions.delete_log_failure('this is err')).toEqual({
            type: types.DELETE_LOG_FAILURE,
            error: 'this is err'
        });
    });
});