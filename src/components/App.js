import React, { Component } from 'react';
import '../assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
// import NotFound from './NotFound';

export default class App extends Component {

  render() {
    return ( 
      <Router>

        <Switch>
          <Route path="/" component={ Home } />
          <Route exact path="/impressum" component={ LegalNotice } />
          <Route exact path="/datenschutzerklaerung" component={ PrivacyPolicy } />
          {/* <Route component={ NotFound } /> */}
        </Switch>

        <Footer />

      </Router>
    )
  }

}
