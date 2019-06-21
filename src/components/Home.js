import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import Balloons from './Balloons';

export default class Home extends Component {
  state = {
    renderText: false,
    queries: queryString.parse(this.props.location.search)
  }

  componentDidMount() {

    const { queries } = this.state;

    document.title = `Happy birthday${queries.receiver ? ", " + queries.receiver + "!" : "!"}`

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

    const { queries } = this.state;

    return (
      <Fragment>
        <Balloons />
        {this.state.renderText && <main>
          <p className="receiver">Happy birthday{queries.receiver && ", " + queries.receiver}!</p>
          <p className="sender">{queries.sender}</p>
        </main>}
      </Fragment>
    );
  }
}