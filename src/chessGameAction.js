/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../src/actionTypes';

// import _ from 'lodash';
/*eslint no-console: 0 */
export function createBoard(board) {
    return function (dispatch) {
        dispatch({
            type: types.CREATE_BOARD,
            board
        });
    };
}


