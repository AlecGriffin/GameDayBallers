import React, { Component } from 'react';
import { getCoach } from '../../json_old/coach_data.js';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';

export default class Team extends Component {
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
    <div className="grid-element col-md-4 col-6" key={player.toLowerCase().replace(/\s+/g, '')}>
      <a href={ "/players/" + player.toLowerCase().replace(/\s+/g, '') }>
        { player }
      </a>
    </div>
    );

    var pastTeamsCard;
    if (coach.past_teams.length !== 0) {
      pastTeamsCard = (
        <div className="card">
          <div className="card-title">
            Past Teams Coached
          </div>
          <div class="card-body card-list">
            <ul>
              { pastTeams }
            </ul>
          </div>
        </div>);
    }

    var recognitionsCard;
    if (coach.recognitions.length !== 0) {
      recognitionsCard = (
        <div className="card">
          <div className="card-title">
            Recognitions
          </div>
          <div class="card-body card-list">
            <ul>
              { recognitions }
            </ul>
          </div>
        </div>);
    }


    return (
      <div className={ "main " + coach.team_color }>
        <Row>
          <Col md={4}>
            <div className="card image-card full-image">
              <div className="card-title">
                <img src={coach.image_url}/>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>{ coach.name }</b>
                  </li>
                  <li>
                    <a href={ "/teams/" + coach.current_team.toLowerCase().replace(/\s+/g, '') }><b>{ coach.current_team }</b></a>
                  </li>
                  <li id="dob">
                    <b>Date of Birth: </b>{ coach.dob }
                  </li>
                  <li id="winloss">
                    <b>Win/Loss Percentage: </b>{ coach.win_loss_percentage }
                  </li>
                </ul>
              </div>
            </div>
            { recognitionsCard }
            { pastTeamsCard }
          </Col>

          <Col md={8}>
            <div className="card grid-card">
              <div className="card-title">
                Players
              </div>
              <div className="card-body">

                <div className="roster-wrapper row">
                  <div className="roster row">
                    { roster }
                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    );
  }
}
