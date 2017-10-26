import React, {Component} from 'react';
import TeamThumbnail from '../Team_Grid/Team_Thumbnail/Team_Thumbnail.jsx';
import { getDivision } from '../../json_old/division_data.js';
import { getPlayer } from '../../json_old/player_data.js';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Division extends Component {
  constructor(props){
    super(props)

    this.state = {
      division : {
        "conference": "",
        "divChamp": "",
        "imageURL": "",
        "inauguralSeason": "",
        "mostDivTitles": "",
        "name": "",
        "rivalries": [],
        "teams": [
          {
            "image_url": "",
            "name": "",
            "url": ""
          }]
      }
    }

    var url = window.location.href;
    var division_url = 'https://api-dot-game-day-ballers-181000.appspot.com/divisions/' + url.split('/')[url.split('/').length - 1]
    axios.get(division_url).then(response => {
      this.setState({
        division : response['data']
      })
    })
  }

  RenderTeamThumbnail(link, Team_name, img_source){
    return(
      <Link to= {link}>
        <TeamThumbnail name={Team_name} src={img_source}/>
      </Link>
    );
  }

  RenderTeamThumbnails(){
    var result = [];
    for(let i = 0; i < this.state.division.teams.length; i++){
      var team = this.state.division.teams[i]
      result.push(this.RenderTeamThumbnail(team.url, team.name, team.image_url ));
    }
    return result;
  }

  render() {

    // MUST BE CHANGED
    /*var players = this.state.division.players.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.toLowerCase().replace(/\s+/g, '')}>
    <Link to={ "/players/" + player.toLowerCase().replace(/\s+/g, '') }>
    { player }
    </Link>
    </Col>
    );

    var teams = this.state.division.players.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.toLowerCase().replace(/\s+/g, '')}>
    <Link to={ "/teams/" + getPlayer(player.toLowerCase().replace(/\s+/g, '')).teamURL }>
    { getPlayer(player.toLowerCase().replace(/\s+/g, '')).team }
    </Link>
    </Col>
    );*/


    var rivalries = this.state.division.rivalries.map((rivalry) =>
    <li key={rivalry.toLowerCase().replace(/\s+/g, '')}>
      <b>{rivalry}</b>
    </li>
  );


  return (
    <div className="main">
      <Row>
        <Col sm={4}>
          <div className="card image-card white-card">
            <div className="card-title">
              <img src={this.state.division.imageURL} alt="logo"/>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>{ this.state.division.name } Division</b>
                </li>
                <li>
                  {this.state.division.conference} Conference
                </li>
                <li>
                  Inaugural Season: {this.state.division.inauguralSeason}
                </li>
                <li>
                  Most Recent Division Champion: {this.state.division.divChamp}
                </li>
                <li>
                  Team with the Most Division Titles: {this.state.division.mostDivTitles}
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
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
                  { this.RenderTeamThumbnails() }
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
