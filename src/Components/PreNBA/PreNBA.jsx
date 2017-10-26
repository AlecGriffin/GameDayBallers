import React, {Component} from 'react';
import { getPreNba } from '../../json_old/pre_nba_data.js';
import { getPlayer } from '../../json_old/player_data.js';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Player extends Component {

  render() {
    var url = window.location.href;
    var schoolName = url.split('/')[url.split('/').length - 1];
    var preNba = getPreNba(schoolName);


    var players = preNba.players.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.toLowerCase().replace(/\s+/g, '')}>
      <Link to={ "/players/" + player.toLowerCase().replace(/\s+/g, '') }>
        { player }
      </Link>
    </Col>
    );

    var players_teams = preNba.players.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.toLowerCase().replace(/\s+/g, '')}>
      <Link to={ "/teams/" + getPlayer(player.toLowerCase().replace(/\s+/g, '')).teamURL }>
        { getPlayer(player.toLowerCase().replace(/\s+/g, '')).team }
      </Link>
    </Col>
    );

    return (
      <div className="main">
        <Row>
          <Col sm={4}>
            <div className="card image-card white-card">
              <div className="card-title">
                <img src={preNba.logo} alt="logo"/>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>{ preNba.name }</b>
                  </li>
                  <li>
                    {preNba.city}, {preNba.state}
                  </li>
                </ul>
              </div>
            </div>
            <div className="card image-card full-image">
              <div className="card-title">
                Mascot
                <img src={preNba.mascot_img} alt="mascot"/>
              </div>
              <div className="card-body">
                <b>{preNba.mascot}</b>
              </div>
            </div>
          </Col>

          <Col sm={8}>
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
            <div className="card grid-card">
              <div className="card-title">
                Teams players have played on
              </div>
              <div className="card-body">

                <div className="roster-wrapper">
                  <div className="roster row">
                    { players_teams }
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
