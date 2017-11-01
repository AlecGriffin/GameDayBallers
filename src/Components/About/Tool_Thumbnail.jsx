import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Tool_Thumbnail extends Component {

  render(){
    return(
      <Col xs={6} sm={4} className="text-center">
          <div className="card image-card">
            <div className="card-title">
              <img src={this.props.src} alt='Tool'/>
            </div>
            <div className="card-body">
              {this.props.name}
            </div>
          </div>
      </Col>
    );
  }
}
