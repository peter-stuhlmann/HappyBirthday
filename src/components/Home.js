import React, { Component, Fragment } from 'react';
import Balloons from './Balloons';

export default class Home extends Component {
  state = {
    receiver: window.location.pathname.slice(1) || undefined,
    sender: window.location.hash.slice(1).replace(/%20/gi, " "),
    renderText: false
  }

  componentDidMount() {
    document.title = `Happy birthday, ${this.state.receiver}!`

    this.meta = document.createElement('meta');
    this.meta.name = 'description';
    this.meta.setAttribute('content', 'Happy birthday! Send personalized birthday greetings to all your friends - for free and without registration!');
    document.getElementsByTagName('head')[0].appendChild(this.meta);

    setTimeout(
      () => { this.setState({ renderText: true }) }
      , 8500
    )
  }

  render() {
    return (
      <Fragment>
        <Balloons />
        {this.state.renderText && <main>
          <p className="receiver">Happy birthday{this.state.receiver && ", " + this.state.receiver}!</p>
          <p className="sender">{this.state.sender}</p>
        </main>}
      </Fragment>
    );
  }
}