import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';

const routes = (
  <Router history={browserHistory}>
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Link} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
})