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
          'url' : ''}],
      activePage: 1,
      num_players_to_show: 10,
      data_loaded: false
    }


    var url = "https://api-dot-game-day-ballers-181000.appspot.com/players/"

    axios.get(url).then(response => {
      this.setState({
        players : response.data,
        data_loaded: true
      })
    })

    this.handleSelect = this.handleSelect.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByTeamName = this.sortByTeamName.bind(this)
  }

  RenderPlayerThumbnail(link, player_name, img_source){
    return(
      <Link to= {link}>
        <PlayerThumbnail name={player_name} src={img_source}/>
      </Link>
    );
  }

  handleSelect(eventKey) {
    console.log("Set Active Page To: " + eventKey);
    this.setState({
      activePage: eventKey,
    });
  }

  // Use this method to generate Thumbnails when future API is created
  RenderPlayerThumbnails(){
    var result = []

    var upperBound = this.state.activePage * this.state.num_players_to_show
    var lowerBound = upperBound - this.state.num_players_to_show

    for(let i = lowerBound; (i < this.state.players.length) && (i < upperBound); i++){
      var player = this.state.players[i]
      result.push(this.RenderPlayerThumbnail(player.url, player.name, player.image_url ));
    }
    return result;
  }


  sortByName(){
    this.setState({
      players: this.state.players.sort((player1, player2) => {
        var player1Name = player1.name.toLowerCase()
        var player2Name = player2.name.toLowerCase()
        return player1Name > player2Name ? 1 : -1
      })
    });
  }

  sortByTeamName(){
    this.setState({
      players: this.state.players.sort((player1, player2) => {
        var player1Name = player1.name.toLowerCase()
        var player2Name = player2.name.toLowerCase()

        return player1Name > player2Name ? 1 : -1
      })
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
              <DropdownButton title="Sort By">
                <MenuItem eventKey="1" onClick={this.sortByName}>Player Name</MenuItem>
                <MenuItem eventKey="2" onClick={this.sortByTeamName}>Team Name</MenuItem>
                <MenuItem eventKey="3">MPG</MenuItem>
                <MenuItem eventKey="4">FG%</MenuItem>
                <MenuItem eventKey="5">3P%</MenuItem>
                <MenuItem eventKey="6">FT%</MenuItem>
                <MenuItem eventKey="7">PPG</MenuItem>
                <MenuItem eventKey="8">RPG</MenuItem>
                <MenuItem eventKey="9">APG</MenuItem>
                <MenuItem eventKey="10">BPG</MenuItem>
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
    /*
    <ButtonToolbar>

      <Button bsStyle="primary" onClick={this.sortByName}>Player Name</Button>

      <Button bsStyle="success" onClick={this.sortByTeamName}>Team Name</Button>

      <Button bsStyle="info">Position</Button>

      <Button bsStyle="danger">MPG</Button>
      <Button bsStyle="danger">FG%</Button>
      <Button bsStyle="danger">3P%</Button>
      <Button bsStyle="danger">FT%</Button>
      <Button bsStyle="danger">PPG</Button>
      <Button bsStyle="danger">RPG</Button>
      <Button bsStyle="danger">APG</Button>
      <Button bsStyle="danger">BPG</Button>
    </ButtonToolbar> */
  }
}
