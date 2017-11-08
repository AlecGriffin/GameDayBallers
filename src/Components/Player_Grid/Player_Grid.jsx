import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerThumbnail from './Player_Thumbnail/Player_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PaginationAdvanced from '../Pagination/PaginationAdvanced.jsx';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';

export default class Player_Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: [{
        'image_url': '',
        'name': '',
        'url' : '',
        'career_stats': {
          'assists_per_game': '',
          'blocks_per_game': '',
          'field_goal_percentage': '',
          'free_throw_percentage': '',
          'minutes_per_game': '',
          'points_per_game': '',
          'rebounds_per_game': '',
          'three_point_percentage': ''
        },
        'dob': '',
        'height': '',
        'jersey_number':'',
        'position':'',
        'weight':''
        }],
      activePage: 1,
      num_players_to_show: 12,
      data_loaded: false,
      sortBy: 'Name',
      order: 'Ascending'
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.handleSortType = this.handleSortType.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
  }

  componentDidMount(){

    var url = "http://api.gamedayballers.me/players_full/";
    axios.get(url).then(response => {
      this.setState({
        players : response['data'],
        data_loaded: true
      })

    })
  }

  handleSelect(eventKey) {
    console.log("Set Active Page To: " + eventKey);
    this.setState({
      activePage: eventKey,
    });
  }


// <------------ Thumbnail Generation ------------>
  RenderPlayerThumbnail(player){
    return(
      <Link key={player.name } to= {player.url}>
        <PlayerThumbnail overlay={true} name={player.name} src={player.image_url}
          position={player.position} dob={player.dob} height={player.height}
          jerseyNumber={player.jersey_number} weight={player.weight}/>
      </Link>
    );
  }

  RenderPlayerThumbnails(){
    var result = []

    var upperBound = this.state.activePage * this.state.num_players_to_show
    var lowerBound = upperBound - this.state.num_players_to_show
    var players = this.state.players.sort(this.determineSort())

    // //Print Array for Testing:
    // players.forEach((e, i, a)=>{
    //   console.log(e.career_stats.minutes_per_game);
    // })

    for(let i = lowerBound; (i < this.state.players.length) && (i < upperBound); i++){
      var player = this.state.players[i]
      result.push(this.RenderPlayerThumbnail(player));
    }
    return result;
  }

  determineSort(){
    var order = this.state.order
    var sortBy = this.state.sortBy

    switch (sortBy) {
      case 'Name':
        console.log('Name');
        return ((p1, p2) => {
          var result = p1.name.localeCompare(p2.name)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
      case 'Height':
        console.log('Height');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.minutes_per_game) - parseFloat(p1.career_stats.minutes_per_game)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
      case 'MPG':
        console.log('MPG');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.minutes_per_game) - parseFloat(p1.career_stats.minutes_per_game)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
      case 'FG%':
        console.log('FG%');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.field_goal_percentage) - parseFloat(p1.career_stats.field_goal_percentage)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
      case '3P%':
        console.log('3P%');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.three_point_percentage) - parseFloat(p1.career_stats.three_point_percentage)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
      case 'FT%':
        console.log('FT%');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.free_throw_percentage) - parseFloat(p1.career_stats.free_throw_percentage)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
      case 'PPG':
        console.log('PPG');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.points_per_game) - parseFloat(p1.career_stats.points_per_game)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
      case 'RPG':
        console.log('RPG');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.rebounds_per_game) - parseFloat(p1.career_stats.rebounds_per_game)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
      case 'APG':
        console.log('APG');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.assists_per_game) - parseFloat(p1.career_stats.assists_per_game)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
      case 'BPG':
        console.log('BPG');
        return ((p1, p2) => {
          var result = parseFloat(p2.career_stats.blocks_per_game) - parseFloat(p1.career_stats.blocks_per_game)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;

      default:
        console.log('Default');
        return ((p1, p2) => {
          var result = p1.name.localeCompare(p2.name)
          return this.state.order === 'Descending' ? result * -1 : result
      })
      break;
  }
}

  sortByName(pName1, pName2){
    var result = pName1.name.localeCompare(pName2.name)
    return this.state.order === 'Descending' ? result * -1 : result
  }

  calculateAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }


  handleOrder(evt) {
    this.setState({
      order: evt
    });
  }

  handleSortType(evt){
    this.setState({
      sortBy: evt
    });
  }

  render(){
    if(!this.state.data_loaded){
      return(<Loading/>);
    }else{
      return(
        <div className="main">
          <Row className="controls">
            <Col xs={6} className="paginate">
              <PaginationAdvanced num_items={Math.ceil(this.state.players.length / this.state.num_players_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
            </Col>
            <Col xs={6} className="sort-and-filter">
              <DropdownButton title="Team">
                <MenuItem eventKey="1">Any</MenuItem>
                <MenuItem eventKey="2">All The Teams</MenuItem>
              </DropdownButton>
              <DropdownButton title="Position">
                <MenuItem eventKey="1">Any</MenuItem>
                <MenuItem eventKey="2">All The Positions</MenuItem>
              </DropdownButton>
              <DropdownButton title="Division">
                <MenuItem eventKey="1">Any</MenuItem>
                <MenuItem eventKey="2">All The Divisions</MenuItem>
              </DropdownButton>
              <DropdownButton title="Sort By" onSelect={this.handleSortType}>
                <MenuItem eventKey="Name">Player Name</MenuItem>
                <MenuItem eventKey="Height">Height</MenuItem>
                <MenuItem eventKey="Age">Age</MenuItem>
                <MenuItem eventKey="MPG">MPG</MenuItem>
                <MenuItem eventKey="FG%">FG%</MenuItem>
                <MenuItem eventKey="3P%">3P%</MenuItem>
                <MenuItem eventKey="FT%">FT%</MenuItem>
                <MenuItem eventKey="PPG">PPG</MenuItem>
                <MenuItem eventKey="RPG">RPG</MenuItem>
                <MenuItem eventKey="APG">APG</MenuItem>
                <MenuItem eventKey="BPG">BPG</MenuItem>
              </DropdownButton>
              <DropdownButton title={this.state.order} onSelect={this.handleOrder}>
                <MenuItem eventKey="Ascending">Ascending</MenuItem>
                <MenuItem eventKey="Descending">Descending</MenuItem>
              </DropdownButton>
            </Col>
          </Row>

          <Grid>
            <Row>
              {this.RenderPlayerThumbnails()}
            </Row>
          </Grid>
          <Row className="paginate">
            <PaginationAdvanced num_items={Math.ceil(this.state.players.length / this.state.num_players_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
          </Row>
        </div>
      );
    }
  }
}
