import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import connectIO from './socketio';
import App from './containers/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    !PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

// connect socket client
connectIO(store);

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(rootComponent, rootElement);
