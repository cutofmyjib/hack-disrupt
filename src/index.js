import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import City from './City';
import { Router, Route, Link, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/city/:num" component={City} />
  </Router>,
  document.getElementById('root')
);
