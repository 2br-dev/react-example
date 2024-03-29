import React from 'react';
import ReactDOM from 'react-dom';
// 
import './reset.css';
import App from './App';
// 
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//
import redusers from './redusers'
// 
let store = createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
//
//
//
serviceWorker.unregister();
