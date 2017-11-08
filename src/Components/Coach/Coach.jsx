import React, { Component } from 'react';
import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import { getCoach } from '../../json_old/coach_data.js';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx'


export default class Team extends Component {
  constructor(props){
    super(props)

    this.state = {
      'coach' : {
        "current_roster": [
          {
            "image_url": "",
            "name": "",
            "url": ""
          }
        ],
        "current_team": {
          "image_url": "",
          "name": "",
          "url": ""
        },
        "dob": "",
        "image_url": "",
        "name": "",
        "recognitions": [],
        "past_teams": []
      },
      "current_Page": 0,
      "data_loaded": false
    }

  }

  componentDidMount(){
    var url = window.location.href;
    var coach_url = 'https://api-dot-game-day-ballers-181000.appspot.com/coaches/' + url.split('/')[url.split('/').length - 1]
    axios.get(coach_url).then(response => {
      this.setState({
        coach : response.data,
        data_loaded: true
      })
    })
  }

  RenderPlayerThumbnail(link, player_name, img_source){
    return(
      <Link key={player_name} to= {link}>
        <PlayerThumbnail name={player_name} src={img_source}/>
      </Link>
    );
  }

  RenderPlayerThumbnails(){
    var result = []
    for(let i = 0; i < this.state.coach.current_roster.length; i++){
      var player = this.state.coach.current_roster[i]
      result.push(this.RenderPlayerThumbnail(player.url, player.name, player.image_url));
    }
    return result;
  }

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  getColor() {
    if (this.state.coach.color != "" && this.state.coach.color != null) {
      return this.state.coach.color;
    } else {
      return "gray";
    }
  }


  render() {
    var coach = this.state.coach;

    var cardTitleStyle = {
      backgroundColor: this.getColor()
    };

     var pastTeams = coach.past_teams.map((team) =>
       <li key={team.toLowerCase().replace(/\s+/g, '')}>
         {/*<Link to="/teams/">*/}
           { team }
         {/*</Link>*/}
       </li>
     );

     var recognitions = coach.recognitions.map((rec) =>
     <li key={rec.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
       {rec}
     </li>
     );

    var roster = coach.current_roster.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.name.toLowerCase().replace(/\s+/g, '')}>
      <Link to={player.url}>
        { player.name }
      </Link>
    </Col>
    );


    if(!this.state.data_loaded){
      return(<Loading/>);
    }else{
      return (
        <div className={ "main " + coach.team_color }>
          <Row>
            <Col sm={4}>
              <div className="card image-card full-image">
                <div className="card-title">
                  <img onError={this.addDefaultSrc} src={coach.image_url} alt='No Image Found'/>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <b>{ coach.name }</b>
                    </li>
                    <li>
                      <Link to={ coach.current_team.url }><b>{ coach.current_team.name }</b></Link>
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
              <div className="card">
                  <div className="card-title" style={cardTitleStyle}>
                    Recognitions
                  </div>
                  <div className="card-body card-list">
                    <ul>
                      { recognitions }
                    </ul>
                  </div>
              </div>
              <div className="card">
                <div className="card-title" style={cardTitleStyle}>
                  Past Teams
                </div>
                <div className="card-body card-list">
                  <ul>
                    { pastTeams }
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm={8}>
              <div className="card grid-card">
                <div className="card-title" style={cardTitleStyle}>
                  Roster
                </div>
                <div className="card-body">

                  <div className="roster-wrapper row">
                    <div className="roster row">
                      { this.RenderPlayerThumbnails() }
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
