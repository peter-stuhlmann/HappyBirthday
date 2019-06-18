import React, { Component, Fragment } from 'react';

export default class Home extends Component {

  name = window.location.pathname.slice(1)

  componentDidMount() {
    document.title = `Happy Birthday, ${ this.name }!`
  }

  render() {
    return (
      <Fragment>
        <h1>Happy Birthday, { this.name }!</h1>
      </Fragment>
    );
  }
}