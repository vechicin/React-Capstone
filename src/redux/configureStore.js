import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import home from './home/home';
import details from './details/details';

const reducer = combineReducers({
  home, details,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
