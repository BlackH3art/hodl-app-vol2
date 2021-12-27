import * as api from '../api';
import { AUTH, WRONG_CREDENTIALS } from '../redux.actionTypes/actionTypes';

export const signIn = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(loginData);

    dispatch({
      type: AUTH,
      payload: data
    });

    history.push('/application/open-positions');

  } catch (error) {

    dispatch({
      type: WRONG_CREDENTIALS,
      payload: { credentials: "Wrong credentials."}
    })
    
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
