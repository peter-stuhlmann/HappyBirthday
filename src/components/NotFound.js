import React, { Component, Fragment } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <h1>Error 404</h1>
        <p>Sorry, this page does not exist (anymore).</p>
      </Fragment>
    );
  }
}