import React, {Component} from 'react';
import TeamThumbnail from './Team_Thumbnail/Team_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import PaginationAdvanced from '../Pagination/PaginationAdvanced.jsx';



export default class Team_Grid extends Component {

  constructor(props){
    super(props)
    this.state = {
      teams: [{
        'image_url': '',
         'name': '',
          'url' : ''}],
      data_loaded: false,
      num_teams_to_show: 10,
      activePage: 1
    }

    var url = "https://api-dot-game-day-ballers-181000.appspot.com/teams/"

    axios.get(url).then(response => {
      this.setState({
        teams : response['data'],
        data_loaded: true
      })
    })

    this.handleSelect = this.handleSelect.bind(this)
    this.sortByName = this.sortByName.bind(this)
  }

  RenderTeamThumbnail(link, Team_name, img_source){
    return(
      <Link to= {link}>
        <TeamThumbnail name={Team_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderTeamThumbnails(){
    var result = [];

    var upperBound = this.state.activePage * this.state.num_teams_to_show
    var lowerBound = upperBound - this.state.num_teams_to_show
    for(let i = lowerBound; i < this.state.teams.length && i < upperBound; i++){
      var team = this.state.teams[i]
      result.push(this.RenderTeamThumbnail(team.url, team.name, team.image_url ));
    }
    return result;
  }

  handleSelect(eventKey) {
    console.log("Set Active Page To: " + eventKey);
    this.setState({
      activePage: eventKey,
    });
  }

  sortByName(){
    this.setState({
      players: this.state.teams.sort((n1, n2) => {
        var name1 = n1.name.toLowerCase()
        var name2 = n2.name.toLowerCase()
        return name1 > name2 ? 1 : -1
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
              <PaginationAdvanced num_items={Math.ceil(this.state.teams.length / this.state.num_teams_to_show)} max_items={10} activePage={this.state.activePage} onSelect={this.handleSelect}/>
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
                <MenuItem eventKey="1" onClick={this.sortByName}>Team Name</MenuItem>
                {/* <MenuItem eventKey="2" onClick={this.sortByTeamName}></MenuItem> */}
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
                {this.RenderTeamThumbnails()}
            </Row>
          </Grid>
          <Row className="paginate">
            <PaginationAdvanced num_items={Math.ceil(this.state.teams.length / this.state.num_teams_to_show)} max_items={10} activePage={this.state.activePage} onSelect={this.handleSelect}/>
          </Row>
        </div>
      );
    }

  }
}
