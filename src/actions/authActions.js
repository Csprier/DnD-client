import { API_BASE_URL } from '../config';
import { /*clearAuthToken,*/ saveAuthToken } from '../local-storage';
import jwtDecode from 'jwt-decode';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN',
  setAuthToken = authToken => ({ 
    type: SET_AUTH_TOKEN, 
    authToken 
  });

  /**
   * for loading and client persistence
    * if you wanted to refresh the auth token, you might clear it first then log in again
   */
export const CLEAR_AUTH = 'CLEAR_AUTH',
  clearAuth = () => ({
    type: CLEAR_AUTH
  });

export const AUTH_TOKEN_REQUEST = 'AUTH_TOKEN_REQUEST',
  authTokenRequest = () => ({
    type: AUTH_TOKEN_REQUEST
  });

export const AUTH_SUCCESS = 'AUTH_SUCCESS',
  authSuccess = user => ({
    type: AUTH_SUCCESS,
    user
  });

export const AUTH_ERROR = 'AUTH_ERROR',
  authError = error => ({
    type: AUTH_ERROR,
    error
  });

export const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken));
  saveAuthToken(authToken);
}

export const registerUser = (username, password) => dispatch => {
  dispatch(authTokenRequest());
  return (
    fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (res.ok) {
        res.json()
        .then(() => dispatch(loginUser(username, password)));
      }
      else {
        res.json()
          .then(err => dispatch(authError(err)));
      }
    })
    .catch(err => console.error(err))
  );
}

export const loginUser = (username, password) => dispatch => {
  dispatch(authTokenRequest());
  return fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => {
    if (res.ok) {
      res.json()
      .then(() => dispatch(loginUser(username, password)));
    }
    else {
      res.json()
        .then(err => dispatch(authError(err)));
    }
  })
  .catch(err => console.error(err))
}
 
export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authTokenRequest());
  const authToken = getState.auth.authToken;
  return (
    fetch(`${API_BASE_URL}/user/refresh`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${authToken}`}
    })
    .then(res => {
      if (res.ok) {
        res.json()
        .then(({token}) => storeAuthInfo(token, dispatch))
      } else {
        res.json()
        .then(err => dispatch(authError(err)));
      }
    })
    .catch(err => console.error(err))
  );
}