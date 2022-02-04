import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';
import home from './home/home';

const reducer = combineReducers({
  home,
});

// const persistConfiguration = {
//   key: 'persist-key',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfiguration, reducer);

const store = createStore(reducer, applyMiddleware(logger, thunk));

// export const persistor = persistStore(store);

export default store;
