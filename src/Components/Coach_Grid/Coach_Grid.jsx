import React, {Component} from 'react'
import CoachThumbnail from './Coach_Thumbnail/Coach_Thumbnail.jsx'
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import PaginationAdvanced from '../Pagination/PaginationAdvanced.jsx';

export default class Coach_Grid extends Component {

  constructor(props){
    super(props)

    this.state = {
      coaches: [  {
        "image_url": "",
        "name": "",
        "url": "",
        "win_loss_percentage": "",
        "current_team": "",
        "dob": "",
      }],
      data_loaded: false,
      num_coaches_to_show: 12,
      activePage: 1,
      order: "Ascending",
      sortBy: "Name",
      needToSort: false,
      teamFilter: "Any Team",
      updatePaginationAfterFiltering: false,
      numFilteredCoaches: 0,
      search: ''
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleSortType = this.handleSortType.bind(this)
    this.handleTeamFilter = this.handleTeamFilter.bind(this)
  }

  componentDidMount(){
    if(typeof this.props.coaches === 'undefined'){
      var url = "http://api.gamedayballers.me/coaches_full/"
      axios.get(url).then(response => {
        this.setState({
          coaches : response['data'],
          data_loaded : true
        })
      })
    } else {
      url = "http://api.gamedayballers.me/coaches_full/"
      axios.get(url).then(response => {
        this.setState({
          coaches : this.props.coaches,
          data_loaded : true
        })
      })
    }

  }

  componentWillReceiveProps(nextProps){
    if(this.props.coaches !== nextProps.coaches){
      this.setState({
        coaches: nextProps.coaches
      })
    }
  }

  handleSelect(eventKey) {
      this.setState({
        activePage: eventKey,
      });
    }

// <------------ Thumbnail Generation ------------>
  RenderCoachThumbnail(coach){
    return(
      <Link key={coach.name } to= {coach.url}>
        <CoachThumbnail search={this.props.search} overlay={true} name={coach.name} src={coach.image_url}
          dob={coach.dob} winloss ={coach.win_loss_percentage} team = {coach.current_team}/>
        </Link>
      );
    }


  RenderCoachThumbnails(){
    var result = []
    var upperBound = this.state.activePage * this.state.num_coaches_to_show
    var lowerBound = upperBound - this.state.num_coaches_to_show

    var coaches = this.state.coaches
    if(this.state.needToSort){
      coaches.sort(this.determineSort())
      this.setState({
        needToSort: false
      })
    }

    var fCoaches = [];

    if (this.state.teamFilter !== "Any Team") {
      for (let i = 0; i < this.state.coaches.length; i++) {
        var coach = coaches[i];
        if (coach.current_team === this.state.teamFilter) {
            fCoaches.push(coach);
        }
      }
    } else {
      fCoaches = coaches;
    }

    for(let i = lowerBound; (i < fCoaches.length) && (i < upperBound); i++){
      coach = fCoaches[i]
      result.push(this.RenderCoachThumbnail(coach));
    }

    if(this.state.updatePaginationAfterFiltering){
      this.setState({
        numFilteredCoaches: fCoaches.length,
        updatePaginationAfterFiltering: false
      })
    }

    return result;
  }

  //Will handle asc/desc toggle
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

  handleTeamFilter(evt){
    this.setState({
      teamFilter: evt,
      updatePaginationAfterFiltering: true
    });
  }

  determineSort(){
    var sortBy = this.state.sortBy

    switch (sortBy) {
      case 'Name':
        return ((p1, p2) => {
          var result = p2.name.localeCompare(p1.name)
          return this.state.order === 'Ascending' ? result * -1 : result
        })
      case 'Win/Loss%':
        return ((p1, p2) => {
          var result = parseFloat(p2.win_loss_percentage) - parseFloat(p1.win_loss_percentage)
          return this.state.order === 'Ascending' ? result * -1 : result
        })
      case 'Age':
        return ((p1, p2) => {
          var result = Date.parse(p2.dob) - Date.parse(p1.dob)
          return this.state.order === 'Ascending' ? result * -1 : result
        })
      default:
        return ((p1, p2) => {
          var result = p1.name.localeCompare(p2.name)
          return this.state.order === 'Ascending' ? result * -1 : result
        })
  }
}

  render(){
    var numItemsToDisplay  = this.state.coaches.length
    if (this.state.numFilteredCoaches > 0) {
      numItemsToDisplay = this.state.numFilteredCoaches
    }


    var paginationToDisplay = (<PaginationAdvanced
                                  num_items={Math.ceil(numItemsToDisplay / this.state.num_coaches_to_show)}
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
              <DropdownButton id="Team" title={this.state.teamFilter} onSelect={this.handleTeamFilter}>
                <MenuItem eventKey="Any Team">Any Team</MenuItem>
                <MenuItem eventKey="Atlanta Hawks">Atlanta Hawks</MenuItem>
                <MenuItem eventKey="Boston Celtics">Boston Celtics</MenuItem>
                <MenuItem eventKey="Brooklyn Nets">Brooklyn Nets</MenuItem>
                <MenuItem eventKey="Charlotte Hornets">Charlotte Hornets</MenuItem>
                <MenuItem eventKey="Chicago Bulls">Chicago Bulls</MenuItem>
                <MenuItem eventKey="Cleveland Cavaliers">Cleveland Cavaliers</MenuItem>
                <MenuItem eventKey="Dallas Mavericks">Dallas Mavericks</MenuItem>
                <MenuItem eventKey="Denver Nuggets">Denver Nuggets</MenuItem>
                <MenuItem eventKey="Detroit Pistons">Detroit Pistons</MenuItem>
                <MenuItem eventKey="Golden State Warriors">Golden State Warriors</MenuItem>
                <MenuItem eventKey="Houston Rockets">Houston Rockets</MenuItem>
                <MenuItem eventKey="Indiana Pacers">Indiana Pacers</MenuItem>
                <MenuItem eventKey="LA Clippers">LA Clippers</MenuItem>
                <MenuItem eventKey="Los Angeles Lakers">Los Angeles Lakers</MenuItem>
                <MenuItem eventKey="Memphis Grizzlies">Memphis Grizzlies</MenuItem>
                <MenuItem eventKey="Miami Heat">Miami Heat</MenuItem>
                <MenuItem eventKey="Milwaukee Bucks">Milwaukee Bucks</MenuItem>
                <MenuItem eventKey="Minnesota Timberwolves">Minnesota Timberwolves</MenuItem>
                <MenuItem eventKey="New Orleans Pelicans">New Orleans Pelicans</MenuItem>
                <MenuItem eventKey="New York Knicks">New York Knicks</MenuItem>
                <MenuItem eventKey="Oklahoma City Thunder">Oklahoma City Thunder</MenuItem>
                <MenuItem eventKey="Orlando Magic">Orlando Magic</MenuItem>
                <MenuItem eventKey="Philadelphia 76ers">Philadelphia 76ers</MenuItem>
                <MenuItem eventKey="Phoenix Suns">Phoenix Suns</MenuItem>
                <MenuItem eventKey="Portland Trail Blazers">Portland Trail Blazers</MenuItem>
                <MenuItem eventKey="Sacramento Kings">Sacramento Kings</MenuItem>
                <MenuItem eventKey="San Antonio Spurs">San Antonio Spurs</MenuItem>
                <MenuItem eventKey="Toronto Raptors">Toronto Raptors</MenuItem>
                <MenuItem eventKey="Utah Jazz">Utah Jazz</MenuItem>
                <MenuItem eventKey="Washington Wizards">Washington Wizards</MenuItem>
              </DropdownButton>
              <DropdownButton id="Sort By" title="Sort By" onSelect={this.handleSortType}>
                <MenuItem eventKey="Name" >Coach Name</MenuItem>
                <MenuItem eventKey="Win/Loss%" >Win/Loss Percentage</MenuItem>
                <MenuItem eventKey="Age" >Age</MenuItem>
              </DropdownButton>
              <DropdownButton id="Order" title={this.state.order} onSelect={this.handleOrder}>
                <MenuItem eventKey="Ascending">Ascending</MenuItem>
                <MenuItem eventKey="Descending">Descending</MenuItem>
              </DropdownButton>
            </Col>
          </Row>
          <Grid>
            <Row>
                {this.RenderCoachThumbnails()}
            </Row>
          </Grid>
          <Row xs={6} className="paginate">
            {paginationToDisplay}
          </Row>
        </div>
      );
    }
  }
}
