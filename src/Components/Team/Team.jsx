import React, { Component } from 'react';
import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import { Timeline } from 'react-twitter-widgets'
import { getTeam } from '../../json_old/team_data.js';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Team extends Component {

  constructor(props){
    super(props)
    this.state = {
    team : {
      "arena": "",
      "city": "",
      "current_roster": [
        {
          "image_url": "",
          "name": "",
          "url": ""
        }],
      "head_coach": {
        "image_url": "",
        "name": "",
        "url": ""
      },
      "logo_url": "",
      "name": ""
      }
    }

      var url = window.location.href;
      var team_url = 'https://api-dot-game-day-ballers-181000.appspot.com/teams/' + url.split('/')[url.split('/').length - 1]
      axios.get(team_url).then(response => {
        this.setState({
          team : response['data']
        })
        console.log(this.state.team)
      })

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
    for(let i = 0; i < this.state.team.current_roster.length; i++){
      var player = this.state.team.current_roster[i]
      result.push(this.RenderPlayerThumbnail(player.url, player.name, player.image_url));
    }
    return result;
  }

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  render() {
    var team = this.state.team

    var roster = team.current_roster.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.name.toLowerCase().replace(/\s+/g, '')}>
      <Link to={ player.url}>
        { player.name }
      </Link>
    </Col>
    );

    // var titlesCard;
    // if (team.titles.championships.length !== 0) {
    //   titlesCard = (
    //     <div className="card">
    //       <div className="card-title">
    //         Championship Titles
    //       </div>
    //       <div className="card-body">
    //         <ul className="card-list">
    //           <li>
    //             <b>Championship: </b> { team.titles.championships.join(', ') }
    //           </li>
    //           <li>
    //             <b>Conference: </b> { team.titles.conference_champs.join(', ') }
    //           </li>
    //           <li>
    //             <b>Division: </b> { team.titles.division_champs.join(', ') }
    //           </li>
    //         </ul>
    //       </div>
    //     </div>);
    // }

    // var timeline =  (
    //   <Timeline
    //     dataSource={{
    //       sourceType: 'profile',
    //       screenName: team.twitter_name
    //     }}
    //     options={{
    //       username: 'TwitterDev',
    //       height: '400'
    //     }}/>
    //   );

    return (
      <div className={"main " + team.color}>
        <Row>
          <Col sm={4}>
            <div className="card image-card white-card">
              <div className="card-title">
                <img src={team.logo_url} alt="Team Logo"/>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>{ team.name }</b>
                  </li>
                  <li>
                    <b>{ team.city }</b>
                  </li>
                  <li>
                    <b>Arena: </b>{ team.arena }
                  </li>
                </ul>
              </div>
            </div>
            {/* { titlesCard } */}
            {/* <div className="card tweets-container">
              { timeline }
            </div> */}
          </Col>

            <Col sm={8}>
              <div className="card grid-card">
                <div className="card-title">
                  Roster
                </div>
                <div className="card-body">

                  <Row>
                    <Col mdOffset={4} sm={4} className="text-center">
                      <h3>Head Coach</h3>
                      <Link to={ this.state.team.head_coach.url }>
                        <div className="card image-card full-image">
                          <div className="card-title">
                            <img onError={this.addDefaultSrc} src={team.head_coach.image_url} alt='No Image Found'/>
                          </div>
                          <div className="card-body">
                            {team.head_coach.name}
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>

                  <div className="roster-wrapper row">
                    <Col sm={12}><h3>Players</h3></Col>
                    <Row className="roster row">
                      { this.RenderPlayerThumbnails() }
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}
