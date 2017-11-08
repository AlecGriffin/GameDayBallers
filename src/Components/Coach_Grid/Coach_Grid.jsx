import React, {Component} from 'react'
import CoachThumbnail from './Coach_Thumbnail/Coach_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
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
      sortBy: "Name"
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
  }

  componentDidMount(){

    var url = "http://api.gamedayballers.me/coaches_full/"
    axios.get(url).then(response => {
      this.setState({
        coaches : response['data'],
        data_loaded : true
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
  RenderCoachThumbnail(coach){
    return(
      <Link key={coach.name } to= {coach.url}>
        <CoachThumbnail overlay={true} name={coach.name} src={coach.image_url}
          dob={coach.dob} winloss ={coach.win_loss_percentage} team = {coach.current_team.name}/>
        </Link>
      );
    }


  RenderCoachThumbnails(){
    var result = []
    var upperBound = this.state.activePage * this.state.num_coaches_to_show
    var lowerBound = upperBound - this.state.num_coaches_to_show

    var coaches = this.state.coaches.sort(this.sortByName)
    for(let i = lowerBound; (i < this.state.coaches.length) && (i < upperBound); i++){
      var coach = coaches[i]
      result.push(this.RenderCoachThumbnail(coach));
    }
    return result;
  }

  sortByName(coach1, coach2){
    var result = coach1.name.localeCompare(coach2.name)
    return this.state.order === 'Descending' ? result * -1 : result
  }

  //Will handle asc/desc toggle
  handleOrder(evt) {
    this.setState({
      order: evt
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
              <PaginationAdvanced num_items={Math.ceil(this.state.coaches.length / this.state.num_coaches_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
            </Col>
            <Col xs={6} className="sort-and-filter">
              <DropdownButton title="Team">
                <MenuItem eventKey="1">Any</MenuItem>
                <MenuItem eventKey="2">All The Teams</MenuItem>
              </DropdownButton>
              <DropdownButton title="Division">
                <MenuItem eventKey="1">Any</MenuItem>
                <MenuItem eventKey="2">All The Divisions</MenuItem>
              </DropdownButton>
              <DropdownButton title="Sort By">
                <MenuItem eventKey="1" onClick={this.sortByName}>Coach Name</MenuItem>
                <MenuItem eventKey="2">Win/Loss Percentage</MenuItem>
                <MenuItem eventKey="3">Age</MenuItem>
              </DropdownButton>
              <DropdownButton title={this.state.order} onSelect={this.handleOrder}>
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
            <PaginationAdvanced num_items={Math.ceil(this.state.coaches.length / this.state.num_coaches_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
          </Row>
        </div>
      );
    }
  }
}
