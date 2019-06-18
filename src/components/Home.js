import React, { Component, Fragment } from 'react';

export default class Home extends Component {

  receiver = window.location.pathname.slice(1)
  sender = window.location.hash.slice(1).replace(/%20/gi, " ")

  componentDidMount() {
    document.title = `Happy birthday, ${ this.receiver }!`

    this.meta = document.createElement('meta');
    this.meta.name='description';
    this.meta.setAttribute('content', 'Happy birthday! Send personalized birthday greetings to all your friends - for free and without registration!');
    document.getElementsByTagName('head')[0].appendChild(this.meta);
  }

  render() {
    return (
      <Fragment>
        <p className="receiver">Happy birthday, { this.receiver }!</p>
        <p className="sender">{ this.sender }</p>
      </Fragment>
    );
  }
}