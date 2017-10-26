import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerThumbnail from './Player_Thumbnail/Player_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PaginationAdvanced from '../Pagination/PaginationAdvanced.jsx';
import axios from 'axios';

export default class Player_Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: [{
        'image_url': '',
         'name': '',
          'url' : ''}],
    }

    var url = "https://api-dot-game-day-ballers-181000.appspot.com/players/"

    axios.get(url).then(response => {
      this.setState({
        players : response['data']
      })
    })
  }



  RenderPlayerThumbnail(link, player_name, img_source){
    return(
      <Link to= {link}>
        <PlayerThumbnail name={player_name} src={img_source}/>
      </Link>
    );
  }

  // Use this method to generate Thumbnails when future API is created
  RenderPlayerThumbnails(){
    var result = []
    for(let i = 0; i < this.state.players.length; i++){
      var player = this.state.players[i]
      result.push(this.RenderPlayerThumbnail(player.url, player.name, player.image_url ));
    }
    return result;
  }


  render(){
    return(
      <div className="main">
        <Grid>
          <Row>
            {this.RenderPlayerThumbnails()}
          </Row>
          {/* <Col mdOffset={4} md={6}>
            <PaginationAdvanced num_items={9} max_items={10}/>
          </Col> */}

        </Grid>
      </div>
    );
  }
}
