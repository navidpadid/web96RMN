import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import LeftMenu from './leftMenuReact'
import LeftMenuFooter from './leftMenuFooter'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(<NavBar />, document.getElementById('heading'));
ReactDOM.render(<LeftMenu />, document.getElementById('leftNavReact'));
ReactDOM.render(<LeftMenuFooter />, document.getElementById('menuFooter'));