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
        'url' : '',
        'arena': '',
        'city': '',
        'conference': '',
        'division': ''
        }],
      data_loaded: false,
      num_teams_to_show: 12,
      activePage: 1,
      order: "Ascending",
      sortBy: "Name",
      needToSort: false,
      filter: "Any Division",
      filteredCount: 0,
      updatePaginationAfterFiltering: false,
      numFilteredTeams: 0
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleSortType = this.handleSortType.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  componentDidMount(){

    var url = "http://api.gamedayballers.me/teams_full/"
    axios.get(url).then(response => {
      this.setState({
        teams : response['data'],
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

  RenderTeamThumbnail(team){
    return(
      <Link key={team.name } to= {team.url}>
        <TeamThumbnail overlay={true} name={team.name} src={team.image_url}
          city={team.city} arena={team.arena} conference={team.conference}
          division={team.division}/>
        </Link>
      );
    }
  // Use this method to generate Thumbnails when future API is created
  RenderTeamThumbnails(){
    var result = [];

    var upperBound = this.state.activePage * this.state.num_teams_to_show
    var lowerBound = upperBound - this.state.num_teams_to_show
    var teams = this.state.teams
    var fTeams = []

    if(this.state.needToSort){
      teams.sort(this.determineSort())
      this.setState({
        needToSort: false
      })
    }

    if (this.state.filter !== "Any Division") {
      for (let i = 0; i < this.state.teams.length; i++) {
        var team = teams[i];
        if (team.division === this.state.filter) {
            fTeams.push(team);

        }
      }
    } else {
      fTeams = teams
    }

    for(let i = lowerBound; i < fTeams.length && i < upperBound; i++){
      var team = fTeams[i]
      result.push(this.RenderTeamThumbnail(team));
      var string = "<MenuItem eventKey=\"" + team.name + "\">" + team.name + "</MenuItem>";
      console.log(string);
    }

    if(this.state.updatePaginationAfterFiltering){
      this.setState({
        numFilteredTeams: fTeams.length,
        updatePaginationAfterFiltering: false
      })
    }

    return result;
  }

  determineSort(){
    var sortBy = this.state.sortBy

    switch (sortBy) {
      case 'Name':
        console.log('Name');
        return ((p1, p2) => {
          var result = p1.name.localeCompare(p2.name)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
      case 'Conference':
        console.log('Name');
        return ((p1, p2) => {
          var result = p1.conference.localeCompare(p2.conference)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
        case 'Division':
          console.log('Name');
          return ((p1, p2) => {
            var result = p1.division.localeCompare(p2.division)
            return this.state.order === 'Descending' ? result * -1 : result
          })
          break;
      case 'numTitles':
        console.log('numTitles');
        return ((p1, p2) => {
          var result = parseFloat(p2.win_loss_percentage) - parseFloat(p1.win_loss_percentage)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
      Default:
        console.log('Name');
        return ((p1, p2) => {
          var result = p1.name.localeCompare(p2.name)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
  }
}

  handleOrder(evt) {
    this.setState({
      order: evt,
      needToSort: true
    });
  }

  handleSortType(evt){
    this.setState({
      sortBy: evt,
      needToSort: true
    });
  }

  handleFilter(evt){
    this.setState({
      filter: evt,
      updatePaginationAfterFiltering: true
    });
  }

  render(){
    var numItemsToDisplay  = this.state.teams.length
    if (this.state.numFilteredTeams > 0) {
      numItemsToDisplay = this.state.numFilteredTeams
    }


    var paginationToDisplay = (<PaginationAdvanced
                                  num_items={Math.ceil(numItemsToDisplay / this.state.num_teams_to_show)}
                                  max_items={3}
                                  activePage={this.state.activePage}
                                  onSelect={this.handleSelect}/>)






    if(!this.state.data_loaded){
      return(<Loading/>);
    }else{
      return(
        <div className="main">
          <Row className="controls">
            <Col xs={6} className="paginate">
              {paginationToDisplay}
            </Col>
            <Col xs={6} className="sort-and-filter">
              <DropdownButton title={this.state.filter} onSelect={this.handleFilter}>
                <MenuItem eventKey="Any Division">Any Division</MenuItem>
                <MenuItem eventKey="Atlantic">Atlantic</MenuItem>
                <MenuItem eventKey="Central">Central</MenuItem>
                <MenuItem eventKey="Southeast">Southeast</MenuItem>
                <MenuItem eventKey="Southwest">Southwest</MenuItem>
                <MenuItem eventKey="Pacific">Pacific</MenuItem>
                <MenuItem eventKey="Northwest">Northwest</MenuItem>
              </DropdownButton>
              <DropdownButton title="Sort By" onSelect={this.handleSortType}>
                <MenuItem eventKey="Name">Team Name</MenuItem>
                <MenuItem eventKey="Conference" >Conference</MenuItem>
                <MenuItem eventKey="Division" >Division</MenuItem>
                <MenuItem eventKey="numTitles" >Number of Titles</MenuItem>
                <MenuItem eventKey="numPlayers" >Number of Players</MenuItem>

              </DropdownButton>
              <DropdownButton title={this.state.order} onSelect={this.handleOrder}>
                <MenuItem eventKey="Ascending">Ascending</MenuItem>
                <MenuItem eventKey="Descending">Descending</MenuItem>
              </DropdownButton>
            </Col>
          </Row>
          <Grid>
            <Row>
                {this.RenderTeamThumbnails()}
            </Row>
          </Grid>
          <Row className="paginate">
            {paginationToDisplay}
          </Row>
        </div>
      );
    }

  }
}
