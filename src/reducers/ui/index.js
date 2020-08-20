import * as discoveryReducer from './discovery';
import { combineReducers } from 'redux';

const ui = combineReducers({
    ...discoveryReducer
});

export default ui;