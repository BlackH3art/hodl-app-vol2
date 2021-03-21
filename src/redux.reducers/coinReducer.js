import { FETCH_PORTFOLIO, ADD_TRANSACTION } from '../redux.actionTypes/actionTypes';

export default function coinReducer(state = [], action) {
  switch (action.type) {

    case FETCH_PORTFOLIO: 
      return action.payload;

    case ADD_TRANSACTION:

      return [...state, action.payload]

    default: 
      return state;

  }
}