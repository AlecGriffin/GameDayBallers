import React, { Component } from 'react';
import { getPlayer } from '../../json_old/player_data.js';
import { Row, Col, Table } from 'react-bootstrap';
import Sound from 'react-sound';
import lebron_james_audio_file from './lebron_james_vine.wav';

export default class Player extends Component {

  playSound () {
    const audio = new Audio(lebron_james_audio_file)
    // audio.play()
  }

  render(){

    var url = window.location.href;
    var playerName = url.split('/')[url.split('/').length - 1];
    var player = getPlayer(playerName);
    var prenbaURL = "/pre-nba/" + player.prenbaURL;

    var pastTeams = player.past_teams.map((team) =>
      <li key={team.toLowerCase().replace(/\s+/g, '')}>
        <a>{team}</a>

      </li>
    );

    var recognitions = player.recognitions.map((rec) =>
    <li key={rec.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {rec}
    </li>
    );

    var pastTeamsCard;
    if (player.past_teams.length != 0) {
      pastTeamsCard = (
        <div className="card">
          <div className="card-title">
            Previous Teams
          </div>
          <div className="card-body text-center">
            <ul>
              { pastTeams }
            </ul>
          </div>
        </div>);
    }

    var recognitionsCard;
    if (player.recognitions.length != 0) {
      recognitionsCard = (
        <div className="card">
          <div className="card-title">
            Recognitions
          </div>
          <div className="card-body card-list">
            <ul>
              { recognitions }
            </ul>
          </div>
        </div>);
    }



    return(

      <div id="main" className={"main " + player.team_color}>

        <Row>
          {this.playSound()}
          <Col md={4}>
            <div className="card image-card">
              <div className="card-title">
                { player.name } #{ player.jersey_number }
                <img src={ player.image_url } />
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <a href={ "/teams/" + player.team.toLowerCase().replace(/\s+/g, '') }>
                      <b>{ player.team }</b>
                    </a>
                  </li>
                  <li>
                    <b>Position:</b> { player.position }
                  </li>
                  <li>
                    <b>Height:</b> { player.height }
                  </li>
                  <li>
                    <b>Weight:</b> { player.weight }
                  </li>
                  <li>
                    <b>Date of Birth:</b> { player.dob }
                  </li>
                  <li>
                    <b>Pre-NBA Career:</b> <a href={ prenbaURL }>{ player.prenba }</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={8}>
            <div className="card">
              <div className="card-title">
                Career Stats
              </div>
              <div className="card-body card-table">
                <Row>
                  <Table className="tbl first-half col-sm-6">
                    <thead className="table-head">
                      <tr>
                        <th>MPG</th>
                        <th>FG%</th>
                        <th>3P%</th>
                        <th>FT%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{ player.career_stats.minutes_per_game }</td>
                        <td>{ player.career_stats.field_goal_percentage }</td>
                        <td>{ player.career_stats.three_point_percentage }</td>
                        <td>{ player.career_stats.free_throw_percentage }</td>
                      </tr>
                    </tbody>
                  </Table>


                  <Table className="tbl second-half col-sm-6">
                    <thead className="table-head">
                      <tr>
                        <th>PPG</th>
                        <th>RPG</th>
                        <th>APG</th>
                        <th>BPG</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{ player.career_stats.points_per_game }</td>
                        <td>{ player.career_stats.rebounds_per_game }</td>
                        <td>{ player.career_stats.assists_per_game }</td>
                        <td>{ player.career_stats.blocks_per_game }</td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                { recognitionsCard }
              </Col>
              <Col lg={6}>
                { pastTeamsCard }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
