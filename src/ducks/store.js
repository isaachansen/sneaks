import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware'
import { logger } from 'redux-logger'
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(logger));
