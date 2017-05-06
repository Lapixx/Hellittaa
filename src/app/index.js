import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    !PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

// @TODO Remove after testing
import { createChannel, sendMessage } from './actions';
store.dispatch(createChannel("General"));
store.dispatch(createChannel("Random"));
store.dispatch(createChannel("Work"));
store.dispatch(sendMessage("test", "Tijn", "Hello world!"));

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(rootComponent, rootElement);
