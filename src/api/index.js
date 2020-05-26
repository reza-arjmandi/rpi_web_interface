import {
    fetch_logs_request,
    fetch_logs_success,
    fetch_logs_failure,
    fetch_recording_status_request,
    fetch_recording_status_success,
    fetch_recording_status_failure,
    send_new_log_request,
    send_new_log_success,
    send_new_log_failure
} from '../actions';

const api_address = 'https://eaba0047-a89a-4dac-8936-ace33835759c.mock.pstmn.io';

export function fetch_logs() {
  
    return function (dispatch) {
  
      dispatch(fetch_logs_request())
  
      return fetch(`${api_address}/logs`)
        .then(
          response => response.json()
        )
        .then(json => {
          dispatch(fetch_logs_success(json))
          dispatch(fetch_recording_status(json))
        }
            
        ).catch(error => 
          dispatch(fetch_logs_failure(error))
        );
    }
}

export function fetch_recording_status() {
  
  return function (dispatch) {

    dispatch(fetch_recording_status_request())

    return fetch(`${api_address}/recording_status`)
      .then(
        response => response.json()
      )
      .then(
        json => dispatch(fetch_recording_status_success(json)
      )
      ).catch(error => 
        dispatch(fetch_recording_status_failure(error))
      );
  }
}

export function add_new_log(device_info) {

  return function (dispatch) {

    dispatch(send_new_log_request())

    return fetch(`${api_address}/add_new_log`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(device_info)
    })
    .then(
      response => response.json()
    )
    .then(
      json => {
        dispatch(send_new_log_success())
        dispatch(fetch_logs())
      }
    ).catch(error => 
      dispatch(send_new_log_failure(error))
    );
  }
}