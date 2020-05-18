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

});