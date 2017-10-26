import React, {Component} from 'react'
import Coach_Thumbnail from './Coach_Thumbnail/Coach_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Coach_Grid extends Component {

  constructor(props){
    super(props)

    this.state = {
      coaches: [  {
        "image_url": "",
        "name": "",
        "url": ""
      }],
    }


    var url = "https://api-dot-game-day-ballers-181000.appspot.com/coaches/"
    axios.get(url).then(response => {
      this.setState({
        coaches : response['data']
      })
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
  RenderCoachThumbnails(x, y){
    var result = []
    for(let i = x; i <= y && i < this.state.coaches.length; i++){
      var coach = this.state.coaches[i]
      console.log(coach);
      result.push(this.RenderCoachThumbnail(coach.url, coach.name, coach.image_url));
    }
    return result;
  }



  render(){
    return(
      <div className="main">
        <Grid>
          <Row>
            <Col xs={6} sm={4}>
              {this.RenderCoachThumbnails(0, 9)}
            </Col>
            <Col xs={6} sm={4}>
              {this.RenderCoachThumbnails(10, 19)}
            </Col>
            <Col xs={6} sm={4}>
              {this.RenderCoachThumbnails(20, 29)}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
