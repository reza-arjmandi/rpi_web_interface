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
            type: types.FETCH_LOGS_REQUEST,
            description: 'Fetching logs...'
        });
    })

    it('fetch_logs_failure should create FETCH_LOGS_FAILURE action', () => {
        expect(actions.fetch_logs_failure("this is a err")).toEqual({
            type: types.FETCH_LOGS_FAILURE,
            description: 'Fetching of logs failed.',
            error: "this is a err"
        });
    })

    it('fetch_logs_success should create FETCH_LOGS_SUCCESS action', () => {
        expect(actions.fetch_logs_success("this is a response")).toEqual({
            type: types.FETCH_LOGS_SUCCESS,
            description: 'Fetching of logs succeeded.',
            response: "this is a response"
        });
    })

    it('fetch_recording_status_request should \
create FETCH_RECORDING_STATUS_REQUEST', 
    () => {
        expect(actions.fetch_recording_status_request()).toEqual({
            type: types.FETCH_RECORDING_STATUS_REQUEST,
            description: 'Fetching recording status...'
        });
    })

    it('fetch_recording_status_failure should careate \
FETCH_RECORDING_STATUS_FAILURE', () => {
        expect(actions.fetch_recording_status_failure('this is err')).toEqual({
            type:types.FETCH_RECORDING_STATUS_FAILURE,
            description: 'Fetching of recording status failed.',
            error: 'this is err'
        })
    })

    it('fetch_recording_status_success should careate \
FETCH_RECORDING_STATUS_SUCCESS', () => {
        expect(actions.fetch_recording_status_success({
             is_recording: true })).toEqual({
            type: types.FETCH_RECORDING_STATUS_SUCCESS,
            description: 'Fetching of recording status succeeded.',
            is_recording: true
        });

        expect(actions.fetch_recording_status_success({
            is_recording: false })).toEqual({
            type: types.FETCH_RECORDING_STATUS_SUCCESS,
            description: 'Fetching of recording status succeeded.',
            is_recording: false
        });
    })

    it('insert_or_update_log_request should create \
INSERT_OR_UPDATE_LOG_REQUEST', () => {
        expect(actions.insert_or_update_log_request()).toEqual({
            type: types.INSERT_OR_UPDATE_LOG_REQUEST,
            description: 'Inserting or updating a log...'
        });
    });

    it('insert_or_update_log_success should create \
INSERT_OR_UPDATE_LOG_SUCCESS', () => {
        expect(actions.insert_or_update_log_success()).toEqual({
            type: types.INSERT_OR_UPDATE_LOG_SUCCESS,
            description: 'Inserting or updating of the log succeeded.'
        });
    });

    it('insert_or_update_failure should create \
INSERT_OR_UPDATE_LOG_FAILURE', () => {
        expect(actions.insert_or_update_failure('this is err')).toEqual({
            type: types.INSERT_OR_UPDATE_LOG_FAILURE,
            description: 'Inserting or updating of the log failed.',
            error: 'this is err'
        });
    });

    it('delete_log_request should create DELETE_LOG_REQUEST', 
    () => {
        expect(actions.delete_log_request()).toEqual({
            type: types.DELETE_LOG_REQUEST,
            description: 'Deleting a log...'
        });
    })

    it('delete_log_success should create DELETE_LOG_SUCCESS', () => {
        expect(actions.delete_log_success()).toEqual({
            type: types.DELETE_LOG_SUCCESS,
            description: 'Deleting of the log succeeded.'
        });
    })

    it('delete_log_failure should create DELETE_LOG_FAILURE', () => {
        expect(actions.delete_log_failure('this is err')).toEqual({
            type: types.DELETE_LOG_FAILURE,
            description: 'Deleting of the log failed.',
            error: 'this is err'
        });
    })

    it('download_log_file_request should create DOWNLOAD_LOG_FILE_REQUEST', 
    () => {
        expect(actions.download_log_file_request()).toEqual({
            type: types.DOWNLOAD_LOG_FILE_REQUEST,
            description: 'downloading the log file...'
        });
    })

    it('download_log_file_success should create DOWNLOAD_LOG_FILE_SUCCESS', () => {
        expect(actions.download_log_file_success()).toEqual({
            type: types.DOWNLOAD_LOG_FILE_SUCCESS,
            description: 'Downloading of the log file succeeded.'
        });
    })

    it('download_log_file_failure should create DOWNLOAD_LOG_FILE_FAILURE', () => {
        expect(actions.download_log_file_failure('this is err')).toEqual({
            type: types.DOWNLOAD_LOG_FILE_FAILURE,
            description: 'Downloading of the log file failed.',
            error: 'this is err'
        });
    })

    it('start_recording_request should create START_RECORDING_REQUEST', 
    () => {
        expect(actions.start_recording_request()).toEqual({
            type: types.START_RECORDING_REQUEST,
            description: 'start recording...'
        });
    })

    it('start_recording_success should create START_RECORDING_SUCCESS', 
    () => {
        expect(actions.start_recording_success()).toEqual({
            type: types.START_RECORDING_SUCCESS,
            description: 'start of recording succeeded.'
        });
    })

    it('start_recording_failure should create START_RECORDING_FAILURE', 
    () => {
        expect(actions.start_recording_failure('this is err')).toEqual({
            type: types.START_RECORDING_FAILURE,
            description: 'start of recording failed.',
            error: 'this is err'
        });
    })

    it('stop_recording_request should create STOP_RECORDING_REQUEST', 
    () => {
        expect(actions.stop_recording_request()).toEqual({
            type: types.STOP_RECORDING_REQUEST,
            description: 'stop recording...'
        });
    })

    it('stop_recording_success should create STOP_RECORDING_SUCCESS', 
    () => {
        expect(actions.stop_recording_success()).toEqual({
            type: types.STOP_RECORDING_SUCCESS,
            description: 'stop of recording succeeded.'
        });
    })

    it('stop_recording_failure should create STOP_RECORDING_FAILURE', 
    () => {
        expect(actions.stop_recording_failure('this is err')).toEqual({
            type: types.STOP_RECORDING_FAILURE,
            description: 'stop of recording failed.',
            error: 'this is err'
        });
    })
});