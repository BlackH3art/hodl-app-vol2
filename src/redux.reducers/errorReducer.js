import { NO_SUCH_COIN_IN_CMC, UNKNOWN_ERROR, CLEAR_ERRORS } from '../redux.actionTypes/actionTypes';

export default function errorReducer(state = [], action) {
  switch (action.type) {

    case NO_SUCH_COIN_IN_CMC: 
      return [action.payload];

    case UNKNOWN_ERROR:
      console.log('w reducerze UKNNOWN error')
      return [action.payload];

    case CLEAR_ERRORS: 
      return [];

    default: 
      return state;

  }
}