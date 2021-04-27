import * as api from '../api';
import { GET_HISTORY_ITEMS, GET_HISTORY_ITEMS_DETAILS } from '../redux.actionTypes/actionTypes';
import { filterTickersArrayToFetchDB } from '../helpers/helpers';


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


export const getHistoryItemsDetails = (tickers) => async (dispatch) => {
  try {
    const uniqTickers = filterTickersArrayToFetchDB(tickers).toString()

    const { data } = await api.fetchHistoryItemsDetails(uniqTickers);

    dispatch({
      type: GET_HISTORY_ITEMS_DETAILS,
      payload: data
    });
    
  } catch (error) {
    console.log(error);
  }
}