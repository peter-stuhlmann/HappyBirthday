import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          &copy; <a target="_blanc" href="https://peter-stuhlmann-webentwicklung.de/">Peter R. Stuhlmann</a> and <a target="_blanc" href="https://atardavid.com/">Atar David</a>, 2019
        </p>
        <nav>
          <ul>
            <li><a target="_blanc" href="https://github.com/peter-stuhlmann/HappyBirthday">Github</a></li>
            <li><Link to="./impressum">Impressum</Link></li>
            <li><Link to="./datenschutzerklaerung">Datenschutzerklärung</Link></li>
          </ul>
        </nav>
      </footer>
    );
  }
}