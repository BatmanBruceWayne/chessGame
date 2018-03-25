import initialState from '../src/reducers/initialState';
import * as types from './actionTypes';

export default function chessGameReducer(state = initialState.chessGame, action) {
    switch (action.type) {
        case types.CREATE_BOARD:
            return {
                ...state,
                board: action.board
            };
        default:
            return state;
    }
}
