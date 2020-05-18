import {
    fetch_logs_request,
    fetch_logs_success
} from '../actions';

export function fetch_logs() {
  
    return function (dispatch) {
  
      dispatch(fetch_logs_request())
  
      return fetch('https://eef3f14e-dbb2-4e00-b718-ec5b4711ce38.mock.pstmn.io/logs')
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(fetch_logs_success(json))
        )
    }
}