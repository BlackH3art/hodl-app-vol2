import { combineReducers } from 'redux';

import coinReducer from './coinReducer';
import coinDetailsReducer from './coinsDetailsReducer';
import historyReducer from './historyReducer';
import portfolioAverageReducer from './portfolioAverageReducer';
import historyItemsDetailsReducer from './historyItemsDetailsReducer'

export default combineReducers({
  coinReducer,
  coinDetailsReducer,
  historyReducer,
  portfolioAverageReducer,
  historyItemsDetailsReducer
});