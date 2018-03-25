import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import calcultorReducer  from './calcultorReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  calculator: calcultorReducer
});

export default rootReducer;
