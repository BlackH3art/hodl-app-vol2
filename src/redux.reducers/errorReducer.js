import { NO_SUCH_COIN_IN_CMC, UNKNOWN_ERROR, CLEAR_ERRORS, FIELDS_ARE_REQUIRED } from '../redux.actionTypes/actionTypes';

export default function errorReducer(state = {}, action) {
  switch (action.type) {

    case NO_SUCH_COIN_IN_CMC: 
      return action.payload;

    case UNKNOWN_ERROR:
      return action.payload;

    case CLEAR_ERRORS: 
      return {};

    case FIELDS_ARE_REQUIRED:
      return action.payload;

    default: 
      return state;

  }
}