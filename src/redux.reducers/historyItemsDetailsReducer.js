import { GET_HISTORY_ITEMS_DETAILS } from '../redux.actionTypes/actionTypes';

export default function historyItemsDetailsReducer(state = [], action) {
  switch (action.type) {

    case GET_HISTORY_ITEMS_DETAILS:

      return [...action.payload];

    default: 
      return state;

  }
}