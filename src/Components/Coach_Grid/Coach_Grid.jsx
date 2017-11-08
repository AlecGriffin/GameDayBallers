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
      sortBy: "Name",
      needToSort: false
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleSortType = this.handleSortType.bind(this)
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
      this.setState({
        activePage: eventKey,
      });
    }

// <------------ Thumbnail Generation ------------>
  RenderCoachThumbnail(coach){
    return(
      <Link key={coach.name } to= {coach.url}>
        <CoachThumbnail overlay={true} name={coach.name} src={coach.image_url}
          dob={coach.dob} winloss ={coach.win_loss_percentage} team = {coach.current_team}/>
        </Link>
      );
    }


  RenderCoachThumbnails(){
    console.log(' ');
    console.log('Render Thumbnail:');
    console.log('--' + this.state.order);
    console.log('--' + this.state.sortBy);
    console.log(' ');

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



    for(let i = lowerBound; (i < this.state.coaches.length) && (i < upperBound); i++){
      var coach = coaches[i]
      result.push(this.RenderCoachThumbnail(coach));
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
      case 'Win/Loss%':
        console.log('Win/Loss%');
        return ((p1, p2) => {
          var result = parseFloat(p2.win_loss_percentage) - parseFloat(p1.win_loss_percentage)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
      case 'Age':
        console.log('Age');
        return ((p1, p2) => {
          // TODO: NEED TO CALCULATE AGES
          // var result = parseFloat(p2.career_stats.win_loss_percentage) - parseFloat(p1.career_stats.win_loss_percentage)
          // return this.state.order === 'Descending' ? result * -1 : result
          return false
        })
        break;
      Default:
        console.log('Default');
        return ((p1, p2) => {
          var result = p1.name.localeCompare(p2.name)
          return this.state.order === 'Descending' ? result * -1 : result
        })
        break;
  }
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
              <DropdownButton title="Sort By" onSelect={this.handleSortType}>
                <MenuItem eventKey="Name" >Coach Name</MenuItem>
                <MenuItem eventKey="Win/Loss%" >Win/Loss Percentage</MenuItem>
                <MenuItem eventKey="Age" >Age</MenuItem>
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
