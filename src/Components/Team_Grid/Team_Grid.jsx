import React, {Component} from 'react';
import TeamThumbnail from './Team_Thumbnail/Team_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Team_Grid extends Component {
  RenderTeamThumbnail(link, Team_name, img_source){
    return(
      <Link to= {link}>
        <TeamThumbnail name={Team_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderTeamThumbnails(){
    var result = [];
    for(let i = 0; i < 9; i++){
      result.push(this.RenderTeamThumbnail('/teams/sanantoniospurs', 'San Antonio Spurs', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png' ));
    }
    return result;
  }

  render(){
    return(
          <Grid>
            <Row>
              {this.RenderTeamThumbnails()}
            </Row>
          </Grid>
    );
  }
}
