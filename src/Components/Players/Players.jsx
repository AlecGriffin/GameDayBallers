import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from '../Player/Player.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Players extends Component {
  render(){
    return(
      <Grid>
        <Row>
          <Player name="Lebron James" src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png"/>
          <Player name="Lebron James" src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png"/>
          <Player name="Lebron James" src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png"/>
        </Row>
      </Grid>
    );
  }
}
