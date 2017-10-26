import React, {Component} from 'react'
import Coach_Thumbnail from './Coach_Thumbnail/Coach_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Coach_Grid extends Component {

  constructor(props){
    super(props)
    // this.state = {}
    // var url = "/coaches/ " // FIXME: Change this to the actual API URL
    // var coaches = []
    // axios.get(url).then(response => {
    //   coaches
    // })

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
  RenderCoachThumbnails(){
    var result = []
    for(let i = 0; i < this.state.coaches.length; i++){
      var coach = this.state.coaches[i]
      result.push(this.RenderCoachThumbnail(coach.url, coach.name, coach.image_url));
    }
    return result;
  }



  render(){
    return(
      <div className="main">
        <Grid>
          <Row>
            {this.RenderCoachThumbnails()}
          </Row>
        </Grid>
      </div>
    );
  }
}
