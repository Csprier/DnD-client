// import { API_BASE_URL } from '../config';

// CREATE
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER',
  registerNewUser = (username, password) => ({
    type: REGISTER_NEW_USER,
    username,
    password
  });