import React, { Component, Fragment } from 'react';

export default class Home extends Component {

  receiver = window.location.pathname.slice(1)
  sender = window.location.hash.slice(1).replace(/%20/gi, " ")

  componentDidMount() {
    document.title = `Happy birthday, ${ this.receiver }!`
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