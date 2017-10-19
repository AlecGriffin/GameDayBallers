import React, {Component} from 'react'
import Coach from '../Coach/Coach.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Coaches extends Component {
  render(){
    return(
      <Grid>
        <Row>
          <Coach name="Tyronn Lue" src="http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667"/>
          <Coach name="Tyronn Lue" src="http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667"/>
          <Coach name="Tyronn Lue" src="http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667"/>
        </Row>
      </Grid>
    );
  }
}
