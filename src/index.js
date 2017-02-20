import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
// Render the main component into the dom


ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} />
      <Route path = "home" component = {Home} />
      <Route path = "about" component = {About} />
      <Route path = "contact" component = {Contact} />
    </Route>
  </Router>

), document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('app'));
