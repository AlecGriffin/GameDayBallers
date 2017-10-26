import React, {Component} from 'react';
import { getDivision } from '../../json_old/division_data.js';
import { getPlayer } from '../../json_old/player_data.js';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Division extends Component {

  render() {
    var url = window.location.href;
    var divisionName = url.split('/')[url.split('/').length - 1];
    var division = getdivision(divisionName);

/*
    var players = division.players.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.toLowerCase().replace(/\s+/g, '')}>
      <Link to={ "/players/" + player.toLowerCase().replace(/\s+/g, '') }>
        { player }
      </Link>
    </Col>
    );

    var players_teams = division.players.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.toLowerCase().replace(/\s+/g, '')}>
      <Link to={ "/teams/" + getPlayer(player.toLowerCase().replace(/\s+/g, '')).teamURL }>
        { getPlayer(player.toLowerCase().replace(/\s+/g, '')).team }
      </Link>
    </Col>
    );


  var rivalries = division.rivalries.map((rivalry) =>
    <li>
      Inaugural Season: {rivalry}
    </li>
  );

*/
    return (
      <div className="main">
        <Row>
          <Col sm={4}>
            <div className="card image-card white-card">
              <div className="card-title">
                <img src={division.imageURL} alt="logo"/>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>{ division.name } Division</b>
                  </li>
                  <li>
                    {division.conference} Conference
                  </li>
                  <li>
                    Inaugural Season: {division.inauguralSeason}
                  </li>
                  <li>
                    Most Recent Division Champion: {division.divChamp}
                  </li>
                  <li>
                    Team with the Most Division Titles: {division.mostDivTitles}
                  </li>
                </ul>
              </div>
            </div>
            <div className="card image-card white-card">
              <div className="card-title">
                Notable Rivalries
              </div>
              <div className="card-body">
                <ul>
                  { rivalries }
                </ul>
              </div>
            </div>
          </Col>

          <Col sm={8}>
            <div className="card grid-card">
              <div className="card-title">
                Teams
              </div>
              <div className="card-body">

                <div className="roster-wrapper">
                  <div className="roster row">
                    { teams }
                  </div>
                </div>
              </div>
            </div>
            <div className="card grid-card">
              <div className="card-title">
                Players
              </div>
              <div className="card-body">

                <div className="roster-wrapper">
                  <div className="roster row">
                    { players }
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
