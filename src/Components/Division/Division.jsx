import React, {Component} from 'react';
import TeamThumbnail from '../Team_Grid/Team_Thumbnail/Team_Thumbnail.jsx';
import { getDivision } from '../../json_old/division_data.js';
import { getPlayer } from '../../json_old/player_data.js';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import Loading from '../Loading/Loading.jsx'

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
          }],
      },
      "division_loaded" : false,
      "data_loaded" : false,
      "team_reports" : [],
      need_team_reports: true
    }

    var url = window.location.href;
    var division_url = 'https://api-dot-game-day-ballers-181000.appspot.com/divisions/' + url.split('/')[url.split('/').length - 1]
    axios.get(division_url).then(response => {
      this.setState({
        division : response['data'],
        division_loaded : true
      })
    })

    // this.getAxiosPromisesAllPlayers()
  }

  RenderTeamThumbnail(link, Team_name, img_source){
    return(
      <Link to= {link}>
        <TeamThumbnail name={Team_name} src={img_source}/>
      </Link>
    );
  }

  RenderTeamThumbnails(x, y){
    var result = [];
    for(let i = x; i <= y && i < this.state.division.teams.length; i++){
      var team = this.state.division.teams[i]
      result.push(this.RenderTeamThumbnail(team.url, team.name, team.image_url ));
    }
    return result;
  }

//////

  getAxiosPromisesAllPlayers(){
    // console.log("Loaded:" + this.state.division_loaded);
    if(this.state.division_loaded){
      // console.log("start");
      // console.log(this.state.division.teams);
      var promises = []
      for(let i = 0; i < this.state.division.teams.length; i++){
        var team = this.state.division.teams[i]
        var url = 'https://api-dot-game-day-ballers-181000.appspot.com' + team.url
        promises.push(axios.get(url))
        // console.log(team.url)
      }
      // console.log("end");
      return promises
    }
  }

  getPlayers(){
    // console.log("Loaded:" + this.state.division_loaded);
    if(this.state.division_loaded){
      // console.log("Before");
      axios.all(this.getAxiosPromisesAllPlayers()).then((response) =>{

        this.setState({
          need_team_reports: false,
          team_reports : response,
          data_loaded: true
        })
        console.log(response);
      })
    }
  }

  RenderPlayerThumbnail(link, player_name, img_source){
    return(
      <Link to= {link}>
        <PlayerThumbnail name={player_name} src={img_source}/>
      </Link>
    );
  }

  RenderPlayerThumbnails(){
    var result = []
    for(let i = 0; i < this.state.team_reports.length; i++){
      for(let j = 0; j < this.state.team_reports[i].data.current_roster.length ; j++){
        var player = this.state.team_reports[i].data.current_roster[j]
        result.push(this.RenderPlayerThumbnail(player.url, player.name, player.image_url));
      }
    }
    return result;
  }

  GetTeamName(url){
    var result = "";
    for(let i = 0; i < this.state.division.teams.length; i++){
      if (this.state.division.teams[i].url.replace("/teams/","") == url) {
        return this.state.division.teams[i].name;
      }
    }
    return url;
  }


  render() {
    if(this.state.need_team_reports){
        this.getPlayers()
    }

    // this.getPlayers()
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

  if(!this.state.data_loaded){
    return(<Loading/>);
  }else{
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
                    <b>{this.state.division.conference} Conference</b>
                  </li>
                  <li>
                    <b>Inaugural Season:</b> {this.state.division.inauguralSeason}
                  </li>
                  <li>
                    <b>Most Recent Division Champion:</b> {this.GetTeamName(this.state.division.divChamp)}
                  </li>
                  <li>
                    <b>Team with the Most Division Titles:</b> {this.GetTeamName(this.state.division.mostDivTitles)}
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
                  <Row class="roster">
                    <Col xs={6} sm={4}>
                      {this.RenderTeamThumbnails(0, 1)}
                    </Col>
                    <Col xs={6} sm={4}>
                      {this.RenderTeamThumbnails(2, 3)}
                    </Col>
                    <Col xs={6} sm={4}>
                      {this.RenderTeamThumbnails(4, 4)}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="card grid-card">
              <div className="card-title">
                Players
              </div>
              {this.RenderPlayerThumbnails()}
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
}
