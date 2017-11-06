import React, { Component } from 'react';
import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import { Timeline } from 'react-twitter-widgets'
import { getTeam } from '../../json_old/team_data.js';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx'
import YouTube from 'react-youtube'



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
          "name": "",
          "titles": {
            "championships": [],
            "conference_champs": [],
            "division_champs": []
          }
        },
        data_loaded: false,
        youtube_data_loaded: false,
        youtube: []
      }
  }

  componentDidMount(){
    var url = window.location.href;
    var team_url = 'https://api-dot-game-day-ballers-181000.appspot.com/teams/' + url.split('/')[url.split('/').length - 1]
    axios.get(team_url).then(response => {
      this.setState({
        team : response['data'],
        data_loaded: true
      })

      return this.getYouTubeData()
    }).then(youtube => {
      this.setState({
        youtube : youtube.data.items,
        youtube_data_loaded : true,
      })
    })
  }

  getYouTubeData(){
    var maxResults = '1'
    var part = 'snippet'
    var API_KEY = 'AIzaSyB_0ID-n-g31_B0GKkquWh5Kn7WBJPh4rM'
    var searchTopic = this.state.team.name + 'highlights'
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

  getColor() {
    if (this.state.team.color != "" && this.state.team.color != null) {
      return this.state.team.color;
    } else {
      return "gray";
    }
  }

  render() {
    var team = this.state.team;

    var cardTitleStyle = {
      backgroundColor: this.getColor()
    };

    var roster = team.current_roster.map((player) =>
    <Col md={4} xs={6} className="grid-element" key={player.name.toLowerCase().replace(/\s+/g, '')}>
      <Link to={ player.url}>
        { player.name }
      </Link>
    </Col>
    );

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

    if(!this.state.data_loaded){
      return(<Loading/>);
    }else{
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
              <div className="card">
                <div className="card-title" style={cardTitleStyle}>
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
              </div>
              <div className="card youtube-card">
                <div className="card-title" style={cardTitleStyle}>
                  Videos
                </div>
                <div className="card-body">
                  {this.state.youtube_data_loaded && this.renderYoutube()}
                </div>
              </div>
              {/* <div className="card tweets-container">
                { timeline }
              </div> */}
            </Col>

              <Col sm={8}>
                <div className="card grid-card">
                  <div className="card-title" style={cardTitleStyle}>
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
}
