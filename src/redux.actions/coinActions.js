import * as api from '../api';
import { FETCH_PORTFOLIO, ADD_TRANSACTION, EDIT_TRANSACTION, DELETE_TRANSACTION, SELL_TRANSACTION, FETCH_COIN_DATA, FETCH_COIN_PRICES, FETCH_PORTFOLIO_AVERAGE, UNKNOWN_ERROR, CLEAR_ERRORS } from '../redux.actionTypes/actionTypes';

export const getCoins = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPortfolio();

    dispatch({
      type: FETCH_PORTFOLIO,
      payload: data
    });

  } catch (error) {
    console.log(error.message);
  };
};

export const getPortfolioAverage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPortfolioAverage();

    dispatch({
      type: FETCH_PORTFOLIO_AVERAGE,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }
}

export const addTransaction = (transaction) => async (dispatch) => {
  
  dispatch({
    type: CLEAR_ERRORS,
  });

  try {

    const { data } = await api.addTransaction(transaction);

    dispatch({
      type: ADD_TRANSACTION,
      payload: data
    });
       
  } catch (error) {
    dispatch({
      type: UNKNOWN_ERROR,
      payload: "There's no such coin."
    });
  }
};

export const editTransaction = (id, transaction) => async (dispatch) => {

  dispatch({
    type: CLEAR_ERRORS,
  });

  try {
    const { data } = await api.editTransaction(id, transaction);

    dispatch({
      type: EDIT_TRANSACTION,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  };
};

export const deleteTransaction = (id) => async (dispatch) => {

  try {
    await api.deleteTransaction(id);

    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
    
  } catch (error) {
    console.log(error.message);
  };
};

export const sellTransaction = (id, sellingData) => async (dispatch) => {

  try {
    const { data } = await api.sellTransaction(id, sellingData);

    dispatch({
      type: SELL_TRANSACTION,
      payload: data
    });
    
  } catch (error) {
    console.log(error.message);
  };
};

export const fetchCoinDataFromCMC = (ticker) => async (dispatch) => {

  try {
    const { data } = await api.fetchCoinData(ticker); 

    dispatch({
      type: FETCH_COIN_DATA,
      payload: data
    });
    
  } catch (error) {
    console.log(error);
  };
};

export const fetchPricesCoinData = (ticker) => async (dispatch) => {
  
  try {
    const { data } = await api.fetchCoinPrice(ticker);

    dispatch({
      type: FETCH_COIN_PRICES,
      payload: data
    });

  } catch (error) {
    console.log(error.message);
  };
};


