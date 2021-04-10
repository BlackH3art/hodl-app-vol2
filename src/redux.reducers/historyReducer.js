import { GET_HISTORY_ITEMS } from '../redux.actionTypes/actionTypes';

export default function historyReducer(state = [], action) {
  switch (action.type) {

    case GET_HISTORY_ITEMS: 
      return action.payload;

    default: 
      return state;

  }
};

