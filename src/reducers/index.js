import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import chessGameReducer from '../chessGameReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    chessGame: chessGameReducer
});

export default rootReducer;
