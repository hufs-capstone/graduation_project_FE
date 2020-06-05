import { combineReducers } from 'redux';
import counter from './counter';
import age from './age';
import agesex from './agesex';
import product from './product';

const rootReducer = combineReducers({
  counter,
  product,
  age,
  agesex
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;