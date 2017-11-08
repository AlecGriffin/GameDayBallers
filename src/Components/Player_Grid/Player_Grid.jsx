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
      data_loaded: false
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.sortByName = this.sortByName.bind(this)
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

    for(let i = lowerBound; (i < this.state.players.length) && (i < upperBound); i++){
      var player = this.state.players[i]
      result.push(this.RenderPlayerThumbnail(player));
    }
    return result;
  }
// <----------------------###---------------------->


// <------------ Comparator Functions ------------>
  sortByName(){
    this.setState({
      players: this.state.players.sort((n1, n2) => {
        var name1 = n1.name.toLowerCase()
        var name2 = n2.name.toLowerCase()
        return name1 > name2 ? 1 : -1
      })
    });
  }
// <----------------------###---------------------->

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
              <DropdownButton title="Sort By">
                <MenuItem eventKey="1" onClick={this.sortByName}>Player Name</MenuItem>
                <MenuItem eventKey="2">Height</MenuItem>
                <MenuItem eventKey="3">Age</MenuItem>
                <MenuItem eventKey="4">MPG</MenuItem>
                <MenuItem eventKey="5">FG%</MenuItem>
                <MenuItem eventKey="6">3P%</MenuItem>
                <MenuItem eventKey="7">FT%</MenuItem>
                <MenuItem eventKey="8">PPG</MenuItem>
                <MenuItem eventKey="9">RPG</MenuItem>
                <MenuItem eventKey="10">APG</MenuItem>
                <MenuItem eventKey="11">BPG</MenuItem>
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
