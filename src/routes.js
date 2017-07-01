import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Journal from './components/Journal';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Journal} />
  </Route>
);
