import React from 'react';
import ReactDOM from 'react-dom';
import { getTeam } from '../json/team_data.js';

export default class Team extends React.Component {
  render() {
    var url = window.location.href;
    var teamName = url.split('/')[url.split('/').length - 1];
    var team = getTeam(teamName);

    var titles = team.titles.map((rec) =>
    <li key={rec.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {rec}
    </li>
    );

    var titlesCard;
    if (team.titles.length != 0) {
      titlesCard = (<div className="card">
                            <div className="card-head">
                              <h5>Titles</h5>
                            </div>
                            <ul className="card-list">
                              { titles }
                            </ul>
                          </div>);

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

            <div className="">
              { team.head_coach }
            </div>

            <div className="roster-wrapper">
              <div className="roster">
                { team.current_roster }
              </div>
            </div>

          </div>
          <div className="col-md-3">
            { titlesCard }
          </div>
            <div><h3>TWEETS GO HERE</h3></div>
          </div>
          </div>
    );
  }
}

ReactDOM.render(
  <Team/>,
  document.getElementById('team')
);
