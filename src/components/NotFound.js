import React, { Component } from 'react';

export default class NotFound extends Component {
  
  componentDidMount() {
    document.title = "Error 404 Not Found"
  }

  render() {
    return (
      <main>
        <h1>Error 404</h1>
        <p>Sorry, this page does not exist (anymore).</p>
      </main>
    );
  }
}