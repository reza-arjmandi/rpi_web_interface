import {
    fetch_logs_request,
    fetch_logs_success,
    fetch_logs_failure
} from '../actions';

export function fetch_logs() {
  
    return function (dispatch) {
  
      dispatch(fetch_logs_request())
  
      return fetch('https://eaba0047-a89a-4dac-8936-ace33835759c.mock.pstmn.io/logs')
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