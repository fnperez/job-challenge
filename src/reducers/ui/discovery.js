import { makeAsyncActionReducer } from "@lib/redux-utils";
import types from "@actions/types";
import { combineReducers } from "redux";

const request = makeAsyncActionReducer(types.DISCOVER_REQUEST);
const filter = makeAsyncActionReducer(types.DISCOVER_FILTER);
const ids = (state = [], action) => {
    switch(action.type) {
        case types.DISCOVER_SET:
            return action.payload
        default: 
            return state;
    }
}
export const discovery = combineReducers({
    request,
    filter,
    ids
})