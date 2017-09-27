import React from 'react';
import ReactDOM from 'react-dom';
import { getCoach } from '../json/coach_data.js';

export default class Coach extends React.Component {
  render() {
    var url = window.location.href;
    var coachName = url.split('/')[url.split('/').length - 1];
    var coach = getCoach(coachName);

    var pastTeams = coach.past_teams.map((team) =>
      <li key={team.toLowerCase().replace(/\s+/g, '')}>
        <a>{team}</a>
      </li>
    );

    var recognitions = coach.recognitions.map((rec) =>
    <li key={rec.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {rec}
    </li>
    );

    var roster = coach.current_roster.map((player) =>
    <div class="grid-element col-md-4 col-sm-6">
      <a>
        { player }
      </a>
    </div>
    );

    var pastTeamsCard;
    if (coach.past_teams.length != 0) {
      pastTeamsCard = (<div className="card">
                            <div className="card-head">
                              <h5>Past Teams Coached</h5>
                            </div>
                            <ul className="card-list">
                              { pastTeams }
                            </ul>
                          </div>);
    }

    var recognitionsCard;
    if (coach.recognitions.length != 0) {
      recognitionsCard = (<div className="card">
                            <div className="card-head">
                              <h5>Recognitions</h5>
                            </div>
                            <ul className="card-list">
                              { recognitions }
                            </ul>
                          </div>);
    }


    return (
      <div className="main">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="img-container col-sm-6">
                <img src={coach.image_url}/>
              </div>
              <div className="info col-sm-6">
                <ul>
                  <li id="name">
                    { coach.name }
                  </li>
                  <li id="team">
                    <a href={ "/teams/" + coach.current_team.toLowerCase().replace(/\s+/g, '') }>{ coach.current_team }</a>
                  </li>
                  <li id="dob">
                    Date of Birth: { coach.dob }
                  </li>
                  <li id="country">
                    Country of Origin: { coach.country_of_origin }
                  </li>
                  <li id="winloss">
                    Win/Loss Percentage: { coach.win_loss_percentage }
                  </li>
                </ul>
              </div>
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
            { pastTeamsCard }

            { recognitionsCard }
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Coach/>,
  document.getElementById('coach')
);
