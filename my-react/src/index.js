import React from 'react';
import ReactDOM from 'react-dom';
// import App from './adv/redux/redux-saga/Count';
import {Provider} from 'react-redux'
import store from './adv/redux/04-redux-saga/redux/store'
import App from './adv/redux/04-redux-saga/Count';
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
, 
document.getElementById('root'));

