import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Team extends Component {
  render(){
    return(
      <Col xs={6} md={4}>
        <Thumbnail src={this.props.src} alt="242x200">
          <h3>{this.props.name}</h3>
        </Thumbnail>
      </Col>
    );
  }
}
