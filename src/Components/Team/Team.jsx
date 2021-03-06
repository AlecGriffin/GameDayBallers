import React, { Component } from 'react';
import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import { Timeline } from 'react-twitter-widgets'
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
        "color":"",
        "twitter":"",
        "city": "",
        "conference": "",
        "division": "",
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

  componentWillReceiveProps(nextProps){
    this.setState({
      data_loaded:false
    })

    var team_url = 'http://api.gamedayballers.me/teams/' + nextProps.match.params.name
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

  componentDidMount(){
    var team_url = 'http://api.gamedayballers.me/teams/' + this.props.match.params.name
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

    // var spursTeamId = 'K8vZ9171ov0'
    // var apiKey = 'GEX5MsoeYIOj3pdBJmxmauKcXIADiO8P'
    // axios.get().then(response => {
    //
    // })
  }

  getYouTubeData(){
    var maxResults = '1'
    var part = 'snippet'
    var API_KEY = 'AIzaSyB_0ID-n-g31_B0GKkquWh5Kn7WBJPh4rM'
    var searchTopic = this.state.team.name + ' highlights'

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

    return (
      <YouTube
          videoId={this.state.youtube[0].id.videoId}
          opts={opts}
        />
    )
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
    if (this.state.team.color !== "" && this.state.team.color !== null) {
      return this.state.team.color;
    } else {
      return "gray";
    }
  }

  getMapURL() {
    var tag = this.state.team.arena.split(' ').join('+')
        + "," + this.state.team.city.split(', ').join('+').split(' ').join('+');
    return "https://www.google.com/maps/embed/v1/place?key=AIzaSyAPYwFB1-8M2oNmnMvUtONjqU-hBRdxOfI&q=" + tag;
  }

  renderTimeline() {
    if (this.state.team.twitter !== null) {
      return (
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: this.state.team.twitter
          }}
          options={{
            username: 'TwitterDev',
            height: '600'
          }}/>
        );
    } else {
      return (<div></div>);
    }
  }

  render() {
    var team = this.state.team;

    var cardTitleStyle = {
      backgroundColor: this.getColor()
    };

    if(!this.state.data_loaded){
      return(<Loading/>);
    }else{
      return (
        <div className="main">
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
                    <li>
                      <b>Conference: </b>{ team.conference }
                    </li>
                    <li>
                      <b>Division: </b> <Link to={'/divisions/' + team.division} >{ team.division }</Link>
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
              <div className="card tweets-container">
                { this.renderTimeline() }
              </div>
              <div className="card map-card">
                <div className="card-title" style={cardTitleStyle}>
                  Arena
                </div>
                <div className="card-body">
                  <iframe
                    title="highlights"
                    width="100%"
                    height="300"
                    frameBorder="0" style={{ border: 0 }}
                    src={this.getMapURL()}>
                  </iframe>
                </div>
              </div>
            </Col>

              <Col sm={8}>
                <div className="card grid-card">
                  <div className="card-title" style={cardTitleStyle}>
                    Roster
                  </div>
                  <div className="card-body">

                    <Row>
                      <Col smOffset={3} sm={6} mdOffset={4} md={4} className="text-center">
                        <h3>Head Coach</h3>
                        <Link to={ this.state.team.head_coach.url }>
                          <div className="card image-card full-image">
                            <div className="card-title">
                              <img onError={this.addDefaultSrc} src={team.head_coach.image_url} alt={team.head_coach.name}/>
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
