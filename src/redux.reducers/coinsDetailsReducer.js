import { FETCH_COIN_DATA } from '../redux.actionTypes/actionTypes';

export default function coinDetailsReducer(state = [], action) {
  switch (action.type) {

    case FETCH_COIN_DATA:
      return [...state, action.payload]

    default: 
      return state;

  }
}