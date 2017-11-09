import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import PlayerGrid from '../Player_Grid/Player_Grid.jsx'
import TeamGrid from '../Team_Grid/Team_Grid.jsx'
import CoachGrid from '../Coach_Grid/Coach_Grid.jsx'
import DivisionGrid from '../Division_Grid/Division_Grid.jsx'


import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import TeamThumbnail from '../Team_Grid/Team_Thumbnail/Team_Thumbnail.jsx';
import CoachThumbnail from '../Coach_Grid/Coach_Thumbnail/Coach_Thumbnail.jsx';
import DivisionThumbnail from '../Division_Grid/Division_Thumbnail/Division_Thumbnail.jsx';



export default class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      players: [],
      coaches: [],
      teams: [],
      divisions: [],
      dataLoaded: false
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount(){
    console.log('Did Mount!');
    var url = 'http://api.gamedayballers.me/search/' + this.props.match.params.searchTopic
    axios.get(url).then(response =>{
      this.setState({
        players: response.data.players,
        coaches: response.data.coaches,
        teams: response.data.teams,
        divisions: response.data.divisions,
        dataLoaded: true,
        toDisplay: 'players'
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    // if(this.state.dataLoaded){
      // console.log('Did Update!');
      var url = 'http://api.gamedayballers.me/search/' + this.props.match.params.searchTopic
      axios.get(url).then(response =>{
        this.setState({
          players: response.data.players,
          coaches: response.data.coaches,
          teams: response.data.teams,
          divisions: response.data.divisions,
        })
      })
    // }
  }

  RenderPlayerThumbnail(link, player_name, img_source){
    return(
      <Link key={player_name} to= {link}>
        <PlayerThumbnail name={player_name} src={img_source}/>
      </Link>
    );
  }

  RenderPlayerThumbnails(player){
    var result = []
    for(let i = 0; i < this.state.players.length; i++){
      var player = this.state.players[i]
      result.push(this.RenderPlayerThumbnail(player.url, player.name, player.image_url));
    }
    return result;
  }

  RenderCoachThumbnail(link, coach_name, img_source){
    return(
      <Link key={coach_name} to= {link}>
        <CoachThumbnail name={coach_name} src={img_source}/>
      </Link>
    );
  }

  RenderCoachThumbnails(coach){
    var result = []
    for(let i = 0; i < this.state.coaches.length; i++){
      var coach = this.state.coaches[i]
      result.push(this.RenderCoachThumbnail(coach.url, coach.name, coach.image_url));
    }
    return result;
  }

  RenderTeamThumbnail(link, team_name, img_source){
    return(
      <Link key={team_name} to= {link}>
        <TeamThumbnail name={team_name} src={img_source}/>
      </Link>
    );
  }

  RenderTeamThumbnails(team){
    var result = []
    for(let i = 0; i < this.state.teams.length; i++){
      var team = this.state.teams[i]
      result.push(this.RenderTeamThumbnail(team.url, team.name, team.image_url));
    }
    return result;
  }

  RenderDivisionThumbnail(link, division_name, img_source){
    return(
      <Link key={division_name} to= {link}>
        <DivisionThumbnail name={division_name} src={img_source}/>
      </Link>
    );
  }

  RenderDivisionThumbnails(division){
    var result = []
    for(let i = 0; i < this.state.divisions.length; i++){
      var division = this.state.divisions[i]
      result.push(this.RenderDivisionThumbnail(division.url, division.name, division.image_url));
    }
    return result;
  }

  handleSelect(evt){
    this.setState({
      toDisplay: evt
    })
  }



  render(){

    // Get search input text by url
    var inputText = this.props.match.params.searchTopic

    return (
      <div className='main'>
          <h1><strong>Search Results For: </strong>{inputText}</h1>
          <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={'players'}  > Players</NavItem>
            <NavItem eventKey={'teams'}    > Teams</NavItem>
            <NavItem eventKey={'coaches'}  > Coaches</NavItem>
            <NavItem eventKey={'divisions'}> Divisions</NavItem>
          </Nav>

          {this.state.dataLoaded && this.state.toDisplay === 'players' && this.state.players.length > 0 &&<PlayerGrid players={this.state.players}/>}
          {this.state.dataLoaded && this.state.toDisplay === 'coaches' && this.state.coaches.length > 0 &&<CoachGrid coaches={this.state.coaches}/>}
          {this.state.dataLoaded && this.state.toDisplay === 'teams' && this.state.teams.length > 0 &&<TeamGrid teams={this.state.teams}/>}
          {this.state.dataLoaded && this.state.toDisplay === 'divisions' && this.state.divisions.length > 0 &&<DivisionGrid divisions={this.state.divisions}/>}

          {this.state.dataLoaded && this.state.toDisplay === 'players' && this.state.players.length <= 0
          &&<div className="text-center">
              <h3>Sorry, there are no results for <strong>{inputText}</strong></h3>
            </div>}
          {this.state.dataLoaded && this.state.toDisplay === 'coaches' && this.state.coaches.length <= 0
          &&<div className="text-center">
              <h3>Sorry, there are no results for <strong>{inputText}</strong></h3>
            </div>}
          {this.state.dataLoaded && this.state.toDisplay === 'teams' && this.state.teams.length <= 0
          &&<div className="text-center">
              <h3>Sorry, there are no results for <strong>{inputText}</strong></h3>
            </div>}
          {this.state.dataLoaded && this.state.toDisplay === 'divisions' && this.state.divisions.length <= 0
          &&<div className="text-center">
              <h3>Sorry, there are no results for <strong>{inputText}</strong></h3>
            </div>}



          {/* <h2>Players:</h2>
          <Row>
            { this.RenderPlayerThumbnails()}
          </Row>

          <h2>Teams:</h2>
          <Row>
            { this.RenderTeamThumbnails()}
          </Row>

          <h2>Coaches:</h2>
          <Row>
            { this.RenderCoachThumbnails()}
          </Row>

          <h2>Divisions:</h2>
          <Row>
            { this.RenderDivisionThumbnails()}
          </Row> */}
      </div>
    )
  }
}
