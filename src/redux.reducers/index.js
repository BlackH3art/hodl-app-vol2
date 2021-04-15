import { combineReducers } from 'redux';

import coinReducer from './coinReducer';
import coinDetailsReducer from './coinsDetailsReducer';
import historyReducer from './historyReducer';
import portfolioAverageReducer from './portfolioAverageReducer';

export default combineReducers({
  coinReducer,
  coinDetailsReducer,
  historyReducer,
  portfolioAverageReducer
});