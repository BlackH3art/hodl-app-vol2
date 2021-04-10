import * as api from '../api';
import { GET_HISTORY_ITEMS } from '../redux.actionTypes/actionTypes';


export const getHistoryItems = () => async (dispatch) => {
try {
  const { data } = await api.fetchHistoryItems();

  dispatch({
    type: GET_HISTORY_ITEMS,
    payload: data
  });
  
} catch (error) {
  console.log(error)
}
}