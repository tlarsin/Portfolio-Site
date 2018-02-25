import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
