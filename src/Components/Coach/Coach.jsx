import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Coach extends Component {
  render(){



    return(
      <Col xs={6} md={4}>
        <Link to='/'>
          <Thumbnail src={this.props.src} alt="242x200">
            <h3>{this.props.name}</h3>
          </Thumbnail>
        </Link>
      </Col>
    );
  }
}
