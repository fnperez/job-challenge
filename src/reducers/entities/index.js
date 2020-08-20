import * as moviesReducer from './movies';
import { combineReducers } from 'redux';

const entities = combineReducers({
    ...moviesReducer
});

export default entities;