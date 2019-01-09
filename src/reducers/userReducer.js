import { REGISTER_NEW_USER } from '../actions/signUpActions';

const initialState = {
  username: ''
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REGISTER_NEW_USER:
      return {
        ...state,
        username: action.username
      }
    default:
      return state;
  }

}; // End reducer