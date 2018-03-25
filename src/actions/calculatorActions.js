import * as types from '../constants/actionTypes';

export function increment(value) {
  return ({
    type: types.INCREMENT,
    value: value
  });
}
