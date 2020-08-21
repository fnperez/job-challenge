import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import rootReducer from '@reducers';
import Api from '@services/api';

const loggerMiddleware = createLogger();

const middlewares = [
  thunk.withExtraArgument(Api.movies()),
  reduxPackMiddleware,
  loggerMiddleware
];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);