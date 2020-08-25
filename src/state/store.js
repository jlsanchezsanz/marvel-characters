import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import RootReducer from './reducers';

export const initialState = {};

export const middlewares = [ReduxThunk];

export const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
