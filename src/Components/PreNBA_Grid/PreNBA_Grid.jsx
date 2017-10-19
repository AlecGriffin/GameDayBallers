import React, {Component} from 'react'
import PreNBA_Thumbnail from './PreNBA_Thumbnail/PreNBA_Thumbnail.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class PreNBA_Grid extends Component {
  RenderPreNBAThumbnail(link, PreNBA_name, img_source){
    return(
      <Link to= {link}>
        <PreNBA_Thumbnail name={PreNBA_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderPreNBAThumbnails(){
    var result = [];
    for(let i = 0; i < 9; i++){
      result.push(this.RenderPreNBAThumbnail('/pre-nba/sandiegostate', 'San Diego State', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png' ));
    }
    return result;
  }

  render(){
    return(
      <Grid>
        <Row>
          {this.RenderPreNBAThumbnails()}
        </Row>
      </Grid>
    );
  }
}
