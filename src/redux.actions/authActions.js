import * as api from '../api';
import { AUTH } from '../redux.actionTypes/actionTypes';

export const signIn = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(loginData);

    dispatch({
      type: AUTH,
      payload: data
    });

    history.push('/application/open-positions');

  } catch (error) {
    console.log(error);
    
  }
}

export const signUp = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(loginData);

    dispatch({
      type: AUTH,
      payload: data
    });

    history.push('/application/open-positions');
    
  } catch (error) {
    console.log(error);
  };
};
