import React from 'react';
import ReactDOM from 'react-dom';
import { getTeam } from '../json/team_data.js';

export default class Team extends React.Component {
  render() {
    var url = window.location.href;
    var teamName = url.split('/')[url.split('/').length - 1];
    var team = getTeam(teamName);
    var coachURL = "/coaches/" + team.coachURL;

    var ctitles = team.titles.championships.map((title) =>
    <li key={title.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {title}
    </li>
    );

    var cctitles = team.titles.conference_champs.map((title) =>
    <li key={title.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {title}
    </li>
    );

    var dtitles = team.titles.division_champs.map((title) =>
    <li key={title.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {title}
    </li>
    );

    var roster = team.current_roster.map((player) =>
    <div class="grid-element col-md-4 col-sm-6">
      <a>
        { player }
      </a>
    </div>
    );

    var titlesCard;
    if (team.titles.championships.length != 0) {
      titlesCard = (<div className="card">
                            <div className="card-head">
                              <h5>Titles</h5>
                            </div>
                            <ul className="card-list">
                              <li>
                                Championship Titles
                                <ul>
                                  { ctitles }
                                </ul>
                              </li>
                              <li>
                                Conference Titles
                                <ul>
                                  { cctitles }
                                </ul>
                              </li>
                              <li>
                                Division Titles
                                <ul>
                                  { dtitles }
                                </ul>
                              </li>
                            </ul>
                          </div>);
    }

    return (
      <div className="main">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="img-container col-sm-6">
                <img src={team.logo_url}/>
              </div>
              <div className="info col-sm-6">
                <ul>
                  <li>
                     { team.name }
                  </li>
                  <li>
                    { team.city }, { team.country }
                  </li>
                  <li>
                    { team.arena }
                  </li>
                </ul>
              </div>
            </div>

            <div className="title-photo">
              <h3>Head Coach</h3>
                  <a href={ coachURL }>{ team.head_coach }</a>
            </div>

            <div className="roster-wrapper image-grid">
              <div class="grid-title">
                <h3>Players</h3>
              </div>
              <div class="roster row">
                { roster }
              </div>
            </div>
          </div>

          <div className="col-md-3">
            { titlesCard }
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
