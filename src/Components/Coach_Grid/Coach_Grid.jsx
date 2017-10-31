import React, {Component} from 'react'
import Coach_Thumbnail from './Coach_Thumbnail/Coach_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
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
        "url": ""
      }],
      data_loaded: false
    }


    var url = "https://api-dot-game-day-ballers-181000.appspot.com/coaches/"
    axios.get(url).then(response => {
      this.setState({
        coaches : response['data'],
        data_loaded : true
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

    if(!this.state.data_loaded){
      return(<Loading/>);
    }else{
      return(
        <div className="main">
          <Grid>
            <Row>
              {/* <PaginationAdvanced num_items={Math.ceil(this.state.num_players_total / this.state.num_players_to_show)} max_items={10} activePage={this.state.activePage} onSelect={this.handleSelect.bind(this)}/> */}
            </Row>
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
}
