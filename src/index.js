import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Handle from './Handle'
import City from './City';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Handle} />
      <Route path="/city/:handle" component={City} />
    </Route>
  </Router>,
  document.getElementById('root')
);
