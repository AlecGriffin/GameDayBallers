import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Player_Thumbnail from './Player_Thumbnail/Player_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Player_Grid extends Component {


  RenderPlayerThumbnail(link, player_name, img_source){
    return(
      <Link to= {link}>
        <Player_Thumbnail name={player_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderPlayerThumbnails(){
    var result = [];
    for(let i = 0; i < 9; i++){
      result.push(this.RenderPlayerThumbnail('players/lebronjames', 'Lebron James', 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png' ));
    }
    return result;
  }


  render(){
    return(
      <Grid>
        <Row>
          {this.RenderPlayerThumbnails()}
        </Row>
      </Grid>
    );
  }
}