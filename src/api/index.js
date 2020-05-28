import {
    fetch_logs_request,
    fetch_logs_success,
    fetch_logs_failure,
    fetch_recording_status_request,
    fetch_recording_status_success,
    fetch_recording_status_failure,
    insert_or_update_log_request,
    insert_or_update_log_success,
    insert_or_update_failure,
    delete_log_request,
    delete_log_success,
    delete_log_failure,
    download_log_file_request,
    download_log_file_success,
    download_log_file_failure
} from '../actions';

import fileDownload from 'js-file-download';

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

export function insert_or_update_log(device_info) {

  return function (dispatch) {

    dispatch(insert_or_update_log_request())

    return fetch(`${api_address}/insert_or_update_log`, {
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
        dispatch(insert_or_update_log_success())
        dispatch(fetch_logs())
      }
    ).catch(error => 
      dispatch(insert_or_update_failure(error))
    );
  }
}

export function delete_log(device_name) {

  return function (dispatch) {

    dispatch(delete_log_request())

    return fetch(`${api_address}/delete_log`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(device_name)
    })
    .then(
      response => response.json()
    )
    .then(
      json => {
        dispatch(delete_log_success())
        dispatch(fetch_logs())
      }
    ).catch(error => 
      dispatch(delete_log_failure(error))
    );
  }
}

export function download_log_file(device) {
  return function (dispatch) {
    dispatch(download_log_file_request())
    return fetch(`${api_address}/download_log_file/${device['device_name']}`)
    .then(
      response => response.blob()
    )
    .then(
      data => {
        fileDownload(data, 'log.txt');
        dispatch(download_log_file_success());
      }
    ).catch(error => 
      dispatch(download_log_file_failure(error))
    );
  }
}