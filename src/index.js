import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Btn from './Btn';

import registerServiceWorker from './registerServiceWorker';
import Posts from "./Posts";

ReactDOM.render(<Clock />, document.getElementById('root'));
ReactDOM.render(<Btn/>,document.getElementById('navid'));
ReactDOM.render(<Posts/>, document.getElementById('abbas'))
registerServiceWorker();
