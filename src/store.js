import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { createLogger } from 'redux-logger';
import rootReducer from '@reducers';
import Api from '@services/api';

const loggerMiddleware = createLogger();

const middlewares = [
  thunk.withExtraArgument(Api.movies()),
  reduxPackMiddleware,
  loggerMiddleware
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;