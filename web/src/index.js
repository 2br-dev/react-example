import React from 'react';
import ReactDOM from 'react-dom';
// 
import './reset.css';
import SingIn from './components/sign_in/SignIn';
// 
import * as serviceWorker from './serviceWorker';
// 
// 
// 
ReactDOM.render(<SingIn />, document.getElementById('root'));
//
//
//
serviceWorker.unregister();
