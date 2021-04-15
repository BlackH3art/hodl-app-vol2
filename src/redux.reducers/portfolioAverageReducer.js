import { FETCH_PORTFOLIO_AVERAGE } from '../redux.actionTypes/actionTypes';

export default function portfolioAverageReducer(state = [], action) {
  switch (action.type) {

    case FETCH_PORTFOLIO_AVERAGE:
      return action.payload;

    default: 
      return state;

  }
}