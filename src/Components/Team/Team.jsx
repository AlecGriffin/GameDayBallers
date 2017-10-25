import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'
import { getTeam } from '../../json_old/team_data.js';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';

export default class Team extends Component {
  render() {
    var url = window.location.href;
    var teamName = url.split('/')[url.split('/').length - 1];
    var team = getTeam(teamName);
    var coachURL = "/coaches/" + team.coachURL;

    var roster = team.current_roster.map((player) =>
    <div className="grid-element col-md-4 col-xs-6" key={player.toLowerCase().replace(/\s+/g, '')}>
      <a href={ "/players/" + player.toLowerCase().replace(/\s+/g, '') }>
        { player }
      </a>
    </div>
    );

    var titlesCard;
    if (team.titles.championships.length != 0) {
      titlesCard = (
        <div className="card">
          <div className="card-title">
            Championship Titles
          </div>
          <div className="card-body">
            <ul className="card-list">
              <li>
                <b>Championship: </b> { team.titles.championships.join(', ') }
              </li>
              <li>
                <b>Conference: </b> { team.titles.conference_champs.join(', ') }
              </li>
              <li>
                <b>Division: </b> { team.titles.division_champs.join(', ') }
              </li>
            </ul>
          </div>
        </div>);
    }

    var timeline =  (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: team.twitter_name
        }}
        options={{
          username: 'TwitterDev',
          height: '400'
        }}/>
      );

    return (
      <div className={"main " + team.color}>
        <Row>
          <Col md={4}>
            <div className="card image-card white-card">
              <div className="card-title">
                <img src={team.logo_url}/>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>{ team.name }</b>
                  </li>
                  <li>
                    <b>{ team.city }, { team.country }</b>
                  </li>
                  <li>
                    <b>Arena: </b>{ team.arena }
                  </li>
                </ul>
              </div>
            </div>
            { titlesCard }
            <div className="card tweets-container">
              { timeline }
            </div>
          </Col>

            <Col md={8}>
              <div className="card grid-card">
                <div className="card-title">
                  Roster
                </div>
                <div className="card-body">

                  <Row>
                    <Col mdOffset={4} sm={4} className="text-center">
                      <h3>Head Coach</h3>
                      <a href={ coachURL }>
                        <div className="card image-card full-image">
                          <div className="card-title">
                            <img src={team.coach_img}/>
                          </div>
                          <div className="card-body">
                            {team.head_coach}
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>

                  <div className="roster-wrapper row">
                    <Col sm={12}><h3>Players</h3></Col>
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
