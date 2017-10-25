import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Coach_Thumbnail extends Component {
  render(){
    return(
      <Col xs={6} md={4} className="text-center">
          <div className="card image-card full-image">
            <div className="card-title">
              <img src={this.props.src}/>
            </div>
            <div className="card-body">
              {this.props.name}
            </div>
          </div>
      </Col>
    );
  }
}
