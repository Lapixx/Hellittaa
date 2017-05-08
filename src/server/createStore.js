import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'

import rootReducer from './reducers';

const store = () => {
    const middleware = applyMiddleware(loggerMiddleware);
    return createStore(rootReducer, middleware);
};

export default store;