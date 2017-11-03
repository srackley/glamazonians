import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import cart from './cart';
import products from './products';
import reviews from './reviews';
import orders from './orders';

const reducer = combineReducers({
  user,
  cart,
  products,
  reviews,
  orders,
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));
const persistedState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {};

const store = createStore(reducer, persistedState, middleware);

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

export * from './user'
export * from './cart';
export * from './products';
export * from './reviews';
export * from './orders';

export default store;
