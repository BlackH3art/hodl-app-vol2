import { AUTH, LOGOUT } from '../redux.actionTypes/actionTypes';

export default function authReducer(state = { data: null }, action) {

  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
      return { ...state, data: action?.payload };

    case LOGOUT:
      localStorage.clear();
      return { ...state, data: null };
  
    default:
      return state;
  }

}