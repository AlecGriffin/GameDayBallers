import React from 'react';
import ReactDOM from 'react-dom';
import { getTeam } from '../json/team_data.js';

export default class Team extends React.Component {
  render() {
    var url = window.location.href;
    var teamName = url.split('/')[url.split('/').length - 1];
    var team = getPlayer(teamName);

    return (
      <div class="main">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="img-container col-sm-6">
                <img src="http://www.fbschool.org/_assets/images/basketball.jpg">
              </div>
              <div class="info col-sm-6">
                <ul>
                  <li>
                    Name
                  </li>
                  <li>
                    City, State/Country
                  </li>
                  <li>
                    Home Court
                  </li>
                </ul>
              </div>
            </div>

            <div class="">
              HEAD COACH
            </div>

            <div class="roster-wrapper">
              <div class="roster">
                ROSTER
              </div>
            </div>

          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-head">
                <h5>Titles</h5>
              </div>
              <ul class="card-list">
                <li>
                  Title
                </li>
                <li>
                  Title
                </li>
                <li>
                  Title
                </li>
              </ul>
            </div>
            <div><h3>TWEETS GO HERE</h3></div>
          </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(
  <Team/>,
  document.getElementById('team')
);
