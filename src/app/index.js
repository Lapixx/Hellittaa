import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import App from './components/App';

import './styles/app.scss';

const store = createStore(
    rootReducer,
    !PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(rootComponent, rootElement);
