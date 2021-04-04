import { combineReducers } from 'redux';

import coinReducer from './coinReducer';
import coinDetailsReducer from './coinsDetailsReducer';

export default combineReducers({
  coinReducer,
  coinDetailsReducer
})