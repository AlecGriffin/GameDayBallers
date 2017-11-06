import React, { Component } from 'react';
import { getPlayer } from '../../json_old/player_data.js';
import { Row, Col, Table } from 'react-bootstrap';
import lebron_james_audio_file from './lebron_james_vine.wav';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx'
import YouTube from 'react-youtube'


export default class Player extends Component {
  constructor(props){
    super(props)

    this.state = {
      player : {
        "career_stats": {
          "assists_per_game": "0",
          "blocks_per_game": "0",
          "field_goal_percentage": "0",
          "free_throw_percentage": "0",
          "minutes_per_game": "0",
          "points_per_game": "0",
          "rebounds_per_game": "0",
          "three_point_percentage": "0"
        },
        "dob": "0",
        "height": "0",
        "image_url": "",
        "jersey_number": 0,
        "player": "",
        "position": "",
        "Division": "",
        "recognitions": [],
        "team": {
          "image_url": "",
          "name": "",
          "url": ""
        },
        "weight": 0
      },
      "player_loaded" : false,
      "coach": {
        "name": "",
        "url": ""
      },
      youtube: [],
      youtube_data_loaded: false,
    }
  }

  componentDidMount(){

    // Handle Aquiring Data from RESTful API
    var url = window.location.href;
    var player_url = 'https://api-dot-game-day-ballers-181000.appspot.com/players/' + url.split('/')[url.split('/').length - 1]
    axios.get(player_url).then(response => {
      this.setState({
        player : response.data,
      })

      return axios.all([
        axios.get('https://api-dot-game-day-ballers-181000.appspot.com' + this.state.player.team.url),
        this.getYouTubeData()
      ])
    }).then(axios.spread((coach, youtube) => {
      this.setState({
        coach: coach.data.head_coach,
        player_loaded : true,
        youtube : youtube.data.items,
        youtube_data_loaded : true,
      })
    }))
  }

  getYouTubeData(){
    var maxResults = '1'
    var part = 'snippet'
    var API_KEY = 'AIzaSyB_0ID-n-g31_B0GKkquWh5Kn7WBJPh4rM'
    var searchTopic = this.state.player.player
    console.log(searchTopic);

    var youtube_URL = "https://www.googleapis.com/youtube/v3/search?q=" + searchTopic + "&maxResults=" + maxResults + "&part=" + part + "&key=" + API_KEY
    return axios.get(youtube_URL)
  }

  renderYoutube(){

    const opts = {
      height: '540',
      width: '720',
      playerVars: {
        autoplay: 0,
        showinfo: 0,
      }
    }

    function _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

    return (
      <YouTube
          videoId={this.state.youtube[0].id.videoId}
          opts={opts}
          onReady={this._onReady}
        />
    )
  }

  playSound () {
    if (this.state.player.player == "LeBron James") {
      const audio = new Audio(lebron_james_audio_file);
      audio.play();

    }
  }

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found';
  }

  render(){

    var url = window.location.href;
    // var playerName = url.split('/')[url.split('/').length - 1];
    var player = this.state.player
    // var DivisionURL = "/division/" + player.DivisionURL;
    // var teamURL = "/teams/" + player.team.toLowerCase().replace(/\s+/g, '')

    // var pastTeams = this.state.player.past_teams.map((team) =>
    //   <li key={team.toLowerCase().replace(/\s+/g, '')}>
    //     <Link to='/'>{team}</Link>
    //   </li>
    // );

     var recognitions = this.state.player.recognitions.map((rec) =>
     <li key={rec.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
       {rec}
     </li>
     );

      if(!this.state.player_loaded){
        return(<Loading/>);
      }else{
        return(
        <div id="main" className={"main " + player.team_color}>

          <Row>
            <Col sm={4}>
              {this.playSound()}
              <div className="card image-card">
                <div className="card-title">
                  { this.state.player['player'] } #{ this.state.player['jersey_number']}
                  <img onError={this.addDefaultSrc} src={this.state.player['image_url']} alt='No Image Found'/>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <Link to={ this.state.player['team']['url'] }><b>{ this.state.player['team']['name'] }</b></Link>
                    </li>
                    <li>
                      <b>Coached by:</b> <Link to={ this.state.coach.url }>{ this.state.coach.name }</Link>
                    </li>
                    <li>
                      <b>Position:</b> { this.state.player['position'] }
                    </li>
                    <li>
                      <b>Height:</b> { this.state.player['height'] }
                    </li>
                    <li>
                      <b>Weight:</b> { this.state.player['weight'] }
                    </li>
                    <li>
                      <b>Date of Birth:</b> { player['dob'] }
                    </li>
                    <li>
                      {/* <b>Pre-NBA Career:</b> <Link to={ DivisionURL }>{ player.Division }</Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm={8}>
              <div className="card">
                <div className="card-title">
                  Career Stats
                </div>
                <div className="card-body card-table">
                  <Row>
                    <Col sm={6} className="tbl">
                      <Table responsive>
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
                    </Col>
                    <Col sm={6} className="tbl second-half">
                      <Table responsive>
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
                    </Col>
                  </Row>
                </div>
              </div>

               <Row>
                <Col lg={6}>
                  <div className="card">
                    <div className="card-title">
                      Recognitions
                    </div>
                    <div className="card-body card-list">
                      <ul>
                        { recognitions }
                      </ul>
                    </div>
                  </div>
                </Col>
                {/*<Col lg={6}>
                  <div className="card">
                    <div className="card-title">
                      Previous Teams
                    </div>
                    <div className="card-body text-center">
                      <ul>
                        { pastTeams }
                      </ul>
                    </div>
                  </div>
                </Col>*/}
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="card youtube-card">
                    <div className="card-title">
                      Videos
                    </div>
                    <div className="card-body">
                      {this.state.youtube_data_loaded && this.renderYoutube()}
                    </div>
                  </div>
                </Col>


              </Row>
            </Col>
          </Row>

        </div>
      );
      }
  }
}
