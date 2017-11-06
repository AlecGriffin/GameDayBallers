import React, {Component} from 'react'
import Division_Thumbnail from './Division_Thumbnail/Division_Thumbnail.jsx'
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
        'url' : ''
      }],
      data_loaded: false,
      num_divisions_to_show: 10,
      activePage: 1
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.sortByName = this.sortByName.bind(this)
  }

  componentDidMount(){

    var url = "https://api-dot-game-day-ballers-181000.appspot.com/divisions/"
    axios.get(url).then(response => {
      this.setState({
        divisions : response['data'],
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
  RenderDivisionThumbnail(link, division_name, img_source){
    return(
      <Link to= {link}>
        <Division_Thumbnail name={division_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderDivisionThumbnails(){
    var result = [];
    for(let i = 0; i < this.state.divisions.length; i++){
      var division = this.state.divisions[i]
      result.push(this.RenderDivisionThumbnail(division.url, division.name, division.image_url ));
    }
    return result;
  }
// <----------------------###---------------------->


// <------------ Comparator Functions ------------>
  sortByName(){
    this.setState({
      players: this.state.divisions.sort((n1, n2) => {
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
              <PaginationAdvanced num_items={Math.ceil(this.state.divisions.length / this.state.num_divisions_to_show)} max_items={3} activePage={this.state.activePage} onSelect={this.handleSelect}/>
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
                <MenuItem eventKey="1" onClick={this.sortByName}>Division Name</MenuItem>
                {/* <MenuItem eventKey="2" onClick={this.sortByTeamName}>Team Name</MenuItem> */}
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
