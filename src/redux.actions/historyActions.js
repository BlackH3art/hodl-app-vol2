import * as api from '../api';
import { GET_HISTORY_ITEMS, GET_HISTORY_ITEMS_DETAILS } from '../redux.actionTypes/actionTypes';


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


export const getHistoryItemsDetails = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHistoryItemsDetails();

    dispatch({
      type: GET_HISTORY_ITEMS_DETAILS,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}