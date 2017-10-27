import React, {Component} from 'react';
import TeamThumbnail from './Team_Thumbnail/Team_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Team_Grid extends Component {

  constructor(props){
    super(props)
    this.state = {
      teams: [{
        'image_url': '',
         'name': '',
          'url' : ''}],
    }

    var url = "https://api-dot-game-day-ballers-181000.appspot.com/teams/"

    axios.get(url).then(response => {
      this.setState({
        teams : response['data']
      })
    })
  }

  RenderTeamThumbnail(link, Team_name, img_source){
    return(
      <Link to= {link}>
        <TeamThumbnail name={Team_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderTeamThumbnails(x, y){
    var result = [];
    for(let i = x; i <= y && i < this.state.teams.length; i++){
      var team = this.state.teams[i]
      result.push(this.RenderTeamThumbnail(team.url, team.name, team.image_url ));
    }
    return result;
  }

  render(){
    return(
      <div className="main">
          <Grid>
            <Row>
              <Col xs={6} sm={4}>
                {this.RenderTeamThumbnails(0, 9)}
              </Col>
              <Col xs={6} sm={4}>
                {this.RenderTeamThumbnails(10, 19)}
              </Col>
              <Col xs={6} sm={4}>
                {this.RenderTeamThumbnails(20, 29)}
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}
