import React, {Component} from 'react'
import DivisionThumbnail from './Division_Thumbnail/Division_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import PaginationAdvanced from '../Pagination/PaginationAdvanced.jsx';

export default class Division_Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      divisions: [{
        'image_url': '',
        'name': '',
        'div_champ': '',
        'conference': '',
        'most_div_titles': '',
        'inaugural_season': '',
        'url' : ''
      }],
      data_loaded: false,
      num_divisions_to_show: 10,
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

    var url = "http://api.gamedayballers.me/divisions_full/";
    axios.get(url).then(response => {
      this.setState({
        divisions : response['data'],
        data_loaded: true

      })
    })
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }

// <------------ Thumbnail Generation ------------>
  RenderDivisionThumbnail(division){
    return(
      <Link key={division.name} to= {division.url}>
        <DivisionThumbnail name={division.name} src={division.image_url}
          divchamp={division.div_champ} conference={division.conference}
          mostdivtitles={division.most_div_titles}
          inauguralseason={division.inaugural_season}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderDivisionThumbnails(){
    var result = [];
    var divisions = this.state.divisions

    if(this.state.needToSort){
      divisions.sort(this.determineSort())
      this.setState({
        needToSort: false
      })
    }

    for(let i = 0; i < this.state.divisions.length; i++){
      var division = divisions[i]
      result.push(this.RenderDivisionThumbnail(division));
    }
    return result;
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
              <PaginationAdvanced num_items={Math.ceil(this.state.divisions.length / this.state.num_divisions_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
            </Col>
            <Col xs={6} className="sort-and-filter">
              <DropdownButton title="Conference">
                <MenuItem eventKey="1">Any</MenuItem>
                <MenuItem eventKey="2">The two conferences</MenuItem>
              </DropdownButton>
              <DropdownButton title="Sort By" onSelect={this.handleSortType}>
                <MenuItem eventKey="Name">Division Name</MenuItem>
                <MenuItem eventKey="InauguralSeason">Inaugural Season</MenuItem>
              </DropdownButton>
              <DropdownButton title={this.state.order} onSelect={this.handleOrder}>
                <MenuItem eventKey="Ascending">Ascending</MenuItem>
                <MenuItem eventKey="Descending">Descending</MenuItem>
              </DropdownButton>
            </Col>
          </Row>
          <Grid>
            <Row>
              {this.RenderDivisionThumbnails()}
            </Row>
          </Grid>
          <Row xs={6} className="paginate">
            <PaginationAdvanced num_items={Math.ceil(this.state.divisions.length / this.state.num_divisions_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
          </Row>
        </div>
      );
    }
  }
}
