import React, {Component} from 'react'
import Division_Thumbnail from './Division_Thumbnail/Division_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Division_Grid extends Component {
  RenderDivisionThumbnail(link, Division_name, img_source){
    return(
      <Link to= {link}>
        <Division_Thumbnail name={Division_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderDivisionThumbnails(){
    var result = [];
    for(let i = 0; i < 9; i++){
      result.push(this.RenderDivisionThumbnail('/division/atlantic', 'Atlantic', 'https://imgur.com/CWOmrZE' ));
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
