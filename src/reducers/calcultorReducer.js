import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function calcultorReducer(state = initialState.calculator, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        ...{
          result: state.result + action.value
        }
      };
    default:
      return state;
  }
}
