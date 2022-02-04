import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import home from './home/home';

const reducer = combineReducers({
  home,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
