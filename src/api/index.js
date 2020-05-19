import {
    fetch_logs_request,
    fetch_logs_success,
    fetch_logs_failure
} from '../actions';

export function fetch_logs() {
  
    return function (dispatch) {
  
      dispatch(fetch_logs_request())
  
      return fetch('https://google.io/logs')
        .then(
          response => response.json()
        )
        .then(json =>
            dispatch(fetch_logs_success(json))
        ).catch(error => 
          dispatch(fetch_logs_failure(error))
        );
    }
}