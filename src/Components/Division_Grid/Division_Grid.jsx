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
      needToSort: false,
      conferenceFilter: 'Any Conference',
      seasonFilter: 'Any Inaugural Season',
      updatePaginationAfterFiltering: false,
      numFilteredDivisions: 0
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleSortType = this.handleSortType.bind(this)
    this.handleConferenceFilter = this.handleConferenceFilter.bind(this)
    this.handleSeasonFilter = this.handleSeasonFilter.bind(this)
  }

  componentDidMount(){
    if(typeof this.props.divisions === 'undefined'){
      var url = "http://api.gamedayballers.me/divisions_full/";
      axios.get(url).then(response => {
        this.setState({
          divisions : response['data'],
          data_loaded: true

        })
      })
    }else{
      this.setState({
        divisions : this.props.divisions,
        data_loaded: true

      })
    }

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

    var filteredByConference = [];
    if (this.state.conferenceFilter !== "Any Conference") {
      for (let i = 0; i < this.state.divisions.length; i++) {
        var division = divisions[i];
        if (division.conference === this.state.conferenceFilter) {
            filteredByConference.push(division);
        }
      }
    } else {
      filteredByConference = divisions;
    }

    var filteredBySeason = [];
    if (this.state.seasonFilter !== "Any Inaugural Season") {
      for (let i = 0; i < this.state.divisions.length; i++) {
        var division = divisions[i];
        if (division.inaugural_season + "Season" === this.state.seasonFilter) {
            filteredBySeason.push(division);
        }
      }
    } else {
      filteredBySeason = divisions;
    }

    var fDivisions = filteredByConference.filter((n) => filteredBySeason.includes(n));

    for(let i = 0; i < fDivisions.length; i++){
      var division = fDivisions[i]
      result.push(this.RenderDivisionThumbnail(division));
    }

    if(this.state.updatePaginationAfterFiltering){
      this.setState({
        numFilteredDivisions: fDivisions.length,
        updatePaginationAfterFiltering: false
      })
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

  handleConferenceFilter(evt){
    this.setState({
      conferenceFilter: evt,
      updatePaginationAfterFiltering: true
    });
  }

  handleSeasonFilter(evt){
    this.setState({
      seasonFilter: evt,
      updatePaginationAfterFiltering: true
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
    var numItemsToDisplay  = this.state.divisions.length
    if (this.state.numFilteredDivisions > 0) {
      numItemsToDisplay = this.state.numFilteredDivisions
    }


    var paginationToDisplay = (<PaginationAdvanced
                                  num_items={Math.ceil(numItemsToDisplay / this.state.num_divisions_to_show)}
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
                <MenuItem eventKey="Eastern">Eastern</MenuItem>
                <MenuItem eventKey="Western">Western</MenuItem>
              </DropdownButton>
              <DropdownButton title={this.state.seasonFilter} onSelect={this.handleSeasonFilter}>
                <MenuItem eventKey="Any Inaugural Season">Any Inaugural Season</MenuItem>
                <MenuItem eventKey="1970-71 Season">1970-71 Season</MenuItem>
                <MenuItem eventKey="2004-05 Season">2004-05 Season</MenuItem>
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
            {paginationToDisplay}
          </Row>
        </div>
      );
    }
  }
}
