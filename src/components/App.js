import React, { Component } from 'react';
import '../assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
// import NotFound from './NotFound';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-62307007-21');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.set({ anonymizeIp: true });

export default class App extends Component {

  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/impressum" component={LegalNotice} />
          <Route exact path="/datenschutzerklaerung" component={PrivacyPolicy} />
          <Route path="/" component={Home} />
          {/* <Route component={ NotFound } /> */}
        </Switch>

        <Footer />

      </Router>
    )
  }

}
