import { FETCH_PORTFOLIO, ADD_COIN } from '../redux.actionTypes/actionTypes';

export default function coinReducer(state = [], action) {
  switch (action.type) {

    case FETCH_PORTFOLIO: 
      return state;

    case ADD_COIN:
      return state;

    default: 
      return state;

  }
}