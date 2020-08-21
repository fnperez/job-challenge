import { makeAsyncActionReducer } from "@lib/redux-utils";
import types from "@actions/types";

export const discovery = makeAsyncActionReducer(types.DISCOVER_REQUEST);