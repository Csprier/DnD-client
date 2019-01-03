import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_TOKEN_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/authActions';

const initialState = {
  authToken: null,
  loading: false,
  error: null,
  user: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken
      }
    case CLEAR_AUTH:
      return {
        authToken: null,
        loading: false,
        error: null,
        user: null
      }
    case AUTH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user
      }
    case AUTH_ERROR:
      return {
        ...state,
        authToken: null,
        loading: false,
        error: action.error,
        user: null
      }
    default:
      return state;
  }
};