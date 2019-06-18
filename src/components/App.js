import React, { Component } from 'react';
import '../assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
// import NotFound from './NotFound';

export default class App extends Component {

  render() {
    return ( 
      <Router>

        <main>
          <Switch>
            <Route path="/" component={ Home } />
            {/* <Route component={ NotFound } /> */}
          </Switch>
        </main>

      </Router>
    )
  }

}
