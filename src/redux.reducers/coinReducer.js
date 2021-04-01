import { FETCH_PORTFOLIO, ADD_TRANSACTION, EDIT_TRANSACTION } from '../redux.actionTypes/actionTypes';

export default function coinReducer(state = [], action) {
  switch (action.type) {

    case FETCH_PORTFOLIO: 
      return action.payload;

    case ADD_TRANSACTION:
      return [...state, action.payload];

    case EDIT_TRANSACTION:
      return state.map((transaction) => transaction._id === action.payload._id ? action.payload : transaction)

    default: 
      return state;

  }
}