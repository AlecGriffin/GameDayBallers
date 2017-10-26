import React, {Component} from 'react'
import Division_Thumbnail from './Division_Thumbnail/Division_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Division_Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      divisions: [{
        'image_url': '',
        'name': '',
        'url' : ''
      }],
    }

    var url = "https://api-dot-game-day-ballers-181000.appspot.com/divisions/"

    axios.get(url).then(response => {
      this.setState({
        divisions : response['data']
      })
    })
  }

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

  render(){
    return(
      <div className="main">
        <Grid>
          <Row>
            {this.RenderDivisionThumbnails()}
          </Row>
        </Grid>
      </div>
    );
  }
}
