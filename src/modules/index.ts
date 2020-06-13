import { combineReducers } from 'redux';
import counter from './counter';
import agesex from './agesex';
import product from './product';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

const rootReducer = combineReducers({
  counter,
  product,
  agesex
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;