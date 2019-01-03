import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/authReducer';

import { loadAuthToken } from './local-storage';
import { setAuthToken, authSuccess } from './actions/authActions';


const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const authToken = loadAuthToken();
if (authToken) {
  const decodedToken = jwtDecode(authToken);
  store.dispatch(setAuthToken(authToken));
  store.dispatch(authSuccess(decodedToken));
}

export default store;
