
// Sign in

export const SIGN_IN_FAILURE = 'sign_in_failure';
export const SIGN_IN_SUCCESS = 'sign_in_success';
export const SIGN_IN_REQUEST = 'sign_in_request';

export const signInRequest = credentials => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({ type: SIGN_IN_REQUEST });

  return fetch('/api/users/signin', options)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);

      return response.json().then(user => (
        { user, token: response.headers.get('x-auth') }
      ));
    })
    .then(
      data => dispatch({ type: SIGN_IN_SUCCESS, payload: data, isisAuthenticated: true }),
      error => dispatch({ type: SIGN_IN_FAILURE, error }),
    );
};
