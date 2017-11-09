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
      divisionFilter: "Any Division",
      conferenceFilter: "Any Conference",
      updatePaginationAfterFiltering: false,
      numFilteredTeams: 0
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleSortType = this.handleSortType.bind(this)
    this.handleDivisionFilter = this.handleDivisionFilter.bind(this)
    this.handleConferenceFilter = this.handleConferenceFilter.bind(this)
  }

  componentDidMount(){
    if(typeof this.props.teams === 'undefined'){
      var url = "http://api.gamedayballers.me/teams_full/"
      axios.get(url).then(response => {
        this.setState({
          teams : response['data'],
          data_loaded: true
        })
      })
    }else{
      this.setState({
        teams : this.props.teams,
        data_loaded: true
      })
    }

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


    if(this.state.needToSort){
      teams.sort(this.determineSort())
      this.setState({
        needToSort: false
      })
    }

    var filteredByDivision = []

    if (this.state.divisionFilter !== "Any Division") {
      for (let i = 0; i < this.state.teams.length; i++) {
        var team = teams[i];
        if (team.division === this.state.divisionFilter) {
            filteredByDivision.push(team);
        }
      }
    } else {
      filteredByDivision = teams
    }

    var filteredByConference = []

    if (this.state.conferenceFilter !== "Any Conference") {
      for (let i = 0; i < this.state.teams.length; i++) {
        var team = teams[i];
        if (team.conference === this.state.conferenceFilter) {
            filteredByConference.push(team);

        }
      }
    } else {
      filteredByConference = teams
    }

    var fTeams = filteredByConference.filter((n) => filteredByDivision.includes(n));

    for(let i = lowerBound; i < fTeams.length && i < upperBound; i++){
      var team = fTeams[i]
      result.push(this.RenderTeamThumbnail(team));
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

  handleDivisionFilter(evt){
    this.setState({
      divisionFilter: evt,
      updatePaginationAfterFiltering: true
    });
  }

  handleConferenceFilter(evt){
    this.setState({
      conferenceFilter: evt,
      updatePaginationAfterFiltering: true
    });
  }

  render(){
    var numItemsToDisplay = this.state.teams.length
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
              <DropdownButton title={this.state.conferenceFilter} onSelect={this.handleConferenceFilter}>
                <MenuItem eventKey="Any Conference">Any Conference</MenuItem>
                <MenuItem eventKey="East">East</MenuItem>
                <MenuItem eventKey="West">West</MenuItem>
              </DropdownButton>
              <DropdownButton title={this.state.divisionFilter} onSelect={this.handleDivisionFilter}>
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
