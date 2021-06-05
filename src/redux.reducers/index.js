import { combineReducers } from 'redux';

import coinReducer from './coinReducer';
import coinDetailsReducer from './coinsDetailsReducer';
import historyReducer from './historyReducer';
import portfolioAverageReducer from './portfolioAverageReducer';
import historyItemsDetailsReducer from './historyItemsDetailsReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  coinReducer,
  coinDetailsReducer,
  historyReducer,
  portfolioAverageReducer,
  historyItemsDetailsReducer,
  errorReducer,
  authReducer
});