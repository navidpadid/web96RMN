import App from './App';
import React, { Component } from 'react';
import { render } from 'react-dom';
import store,{history} from "./redux/user/store";
import { Provider } from 'react-redux'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

render(
    <Provider store={store}>
        <Router history={history}>
                <Route component={App} path="/">
                </Route>
        </Router>
    </Provider>
 ,
    document.getElementById('navBar')
);




