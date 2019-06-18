import React, { Component } from 'react';
import '../assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
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

        <Footer />

      </Router>
    )
  }

}
