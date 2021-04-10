import { combineReducers } from 'redux';

import coinReducer from './coinReducer';
import coinDetailsReducer from './coinsDetailsReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  coinReducer,
  coinDetailsReducer,
  historyReducer
})