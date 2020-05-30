import { combineReducers } from 'redux';
import counter from './counter';
import age from './age';
import agesex from './agesex';

const rootReducer = combineReducers({
  counter,
  age,
  agesex
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;