import * as api from '../api';
import { FETCH_PORTFOLIO, ADD_TRANSACTION } from '../redux.actionTypes/actionTypes';

export const getCoins = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPortfolio();

    dispatch({
      type: FETCH_PORTFOLIO,
      payload: data
    })

  } catch (error) {
    console.log(error.message);
  }
}

export const addTransaction = (transaction) => async (dispatch) => {
  try {
    const { data } = await api.addTransaction(transaction);

    dispatch({
      type: ADD_TRANSACTION,
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }
}

