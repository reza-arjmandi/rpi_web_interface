import Notification from '../../reducers/Notification';
import * as types from '../../constants/ActionTypes';
import ExpectGenerator from './ExpectGenerator';

const setup = () => {

    const generate_request_action = (type) => {
        const action = {
            type,
            description: "this is description."
        };
        const expected_result = {
            message: action.description, 
            type:'info'
        }
        return {
            action,
            expected_result
        };
    };

    const generate_failure_action = (type) => {
        const action = {
            type,
            error: "this is a error",
            description: "this is description."
        };
        const expected_result = {
            message: `${action.description} ${action.error}`,
            type:'error'
        }
        return {
            action,
            expected_result
        };
    };

    const generate_success_action = (type) => {
        const action = {
            type,
            description: "this is description."
        };
        const expected_result = {
            message: action.description, 
            type:'success'
        }
        return {
            action,
            expected_result
        };
    };

    const expectation = ExpectGenerator(Notification);

    const expectation_for_api_actions = (action, expected_result) => {
        const random_state = {
            message: 'random message', 
            type:'random type'
        };
        expectation(undefined, action, expected_result);
        expectation(random_state, action, expected_result);
    }

    const initial_state = {
        message: '', 
        type:''
    };

    const api_types = [
        types.FETCH_LOGS_REQUEST,
        types.FETCH_LOGS_FAILURE,
        types.FETCH_LOGS_SUCCESS,
        types.FETCH_RECORDING_STATUS_REQUEST,
        types.FETCH_RECORDING_STATUS_FAILURE,
        types.FETCH_RECORDING_STATUS_SUCCESS,
        types.INSERT_OR_UPDATE_LOG_REQUEST,
        types.INSERT_OR_UPDATE_LOG_FAILURE,
        types.INSERT_OR_UPDATE_LOG_SUCCESS,
        types.DELETE_LOG_REQUEST,
        types.DELETE_LOG_FAILURE,
        types.DELETE_LOG_SUCCESS,
    ];

    return {
        initial_state,
        expectation,
        expectation_for_api_actions,
        generate_request_action,
        generate_failure_action,
        generate_success_action,
        api_types,
    }
};

describe('Notification reducer', () => {
    it('should handle initial state', () => {
        const {initial_state, expectation} = setup();
        expectation(undefined, {}, initial_state);
    })

    const { api_types } = setup();
    api_types.map( (type) => {
        return it(`should handle ${type}`, () => {
            const { expectation_for_api_actions } = setup();
            var generate_action = null;

            if(type.includes("REQUEST")) {
                const { generate_request_action } = setup();
                generate_action = generate_request_action;
            }
            else if(type.includes("FAILURE")) {
                const { generate_failure_action } = setup();
                generate_action = generate_failure_action;
            }
            else if(type.includes("SUCCESS")) {
                const { generate_success_action } = setup();
                generate_action = generate_success_action;
            }
    
            const { action, expected_result } = generate_action(type);
            expectation_for_api_actions(action, expected_result);
        })
    });

});