import {createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [reduxThunk];

if(process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

// const store = createStore(rootReducer, applyMiddleware(...middleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
  ));

export default store;
