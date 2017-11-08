import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Team_Thumbnail extends Component {
  render(){
    return(
      <Col xs={6} sm={4} className="text-center">
          <div className="card thumbnail-card image-card white-card team-logo">
            <div className="card-title">
              <div className="overlay">
                <div className="overlay-info">
                  <h2 class="overlay-info-title">{this.props.name}</h2>
                  <div className="overlay-info-body">
                    <p><b>City: </b>{this.props.city}</p>
                    <p><b>Arena: </b> {this.props.arena}</p>
                    <p><b>Conference: </b> {this.props.conference}</p>
                    <p><b>Division: </b> {this.props.division}</p>
                  </div>
                </div>
              </div>
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
