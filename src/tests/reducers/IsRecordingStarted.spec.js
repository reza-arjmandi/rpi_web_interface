import IsRecordingStarted from '../../reducers/IsRecordingStarted';
import * as types from '../../constants/ActionTypes';

describe('IsRecordingStarted reducer', () => {

    it('should handle initial state', () => {
        expect(
            IsRecordingStarted(undefined, {})
        ).toEqual(false);
    })

    it('shuld handle FETCH_RECORDING_STATUS_REQUEST', () => {
        const action = {
            type: types.FETCH_RECORDING_STATUS_REQUEST
        }

        expect(
            IsRecordingStarted(false, action)
        ).toEqual(false);

        expect(
            IsRecordingStarted(true, action)
        ).toEqual(true)
    })

    it('shuld handle FETCH_RECORDING_STATUS_FAILURE', () => {
        const action = {
            type: types.FETCH_RECORDING_STATUS_FAILURE
        }

        expect(
            IsRecordingStarted(false, action)
        ).toEqual(false);

        expect(
            IsRecordingStarted(true, action)
        ).toEqual(true)
    })

    it('shuld handle FETCH_RECORDING_STATUS_SUCCESS', () => {
        const action1 = {
            type: types.FETCH_RECORDING_STATUS_SUCCESS,
            is_recording_started: true
        }

        expect(
            IsRecordingStarted(false, action1)
        ).toEqual(action1.is_recording_started);

        expect(
            IsRecordingStarted(true, action1)
        ).toEqual(action1.is_recording_started)

        const action2 = {
            type: types.FETCH_RECORDING_STATUS_SUCCESS,
            is_recording_started: false
        }

        expect(
            IsRecordingStarted(false, action2)
        ).toEqual(action2.is_recording_started);

        expect(
            IsRecordingStarted(true, action2)
        ).toEqual(action2.is_recording_started)
    })
})