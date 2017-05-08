import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './createStore';
import connectIO from './socketio';
import App from './containers/App';

// create Redux store
const store = createStore();

// connect socket client
connectIO(store);

// React root component connected to redux store
const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

// render main app
const rootElement = document.getElementById('root');
ReactDOM.render(rootComponent, rootElement);
