import React, {Component} from 'react'{}
import Coach_Thumbnail from './Coach_Thumbnail/Coach_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Coach_Grid extends Component {
  
  constructor(props){
    super(props)
    this.state = {}
    var url = " "
    axios.get(url).then(response => {

    })
  }


  RenderCoachThumbnail(link, Coach_name, img_source){
    return(
      <Link to= {link}>
        <Coach_Thumbnail name={Coach_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderCoachThumbnails(){
    var result = [];
    for(let i = 0; i < 9; i++){
      result.push(this.RenderCoachThumbnail('/coaches/tyronnlue', 'Tyronn Lue', 'http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667' ));
    }
    return result;
  }



  render(){
    return(
      <Grid>
        <Row>
          {this.RenderCoachThumbnails()}
        </Row>
      </Grid>
    );
  }
}
