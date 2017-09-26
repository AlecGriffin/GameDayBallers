import React, { Component } from 'react';
import logo from './logo.svg';

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Gameday Ballers</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav navbar-right ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Players</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Teams</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Coaches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pre-NBA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Nav;
