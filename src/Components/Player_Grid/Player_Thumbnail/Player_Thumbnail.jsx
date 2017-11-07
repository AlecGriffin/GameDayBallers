import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Player_Thumbnail extends Component {
  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  render(){
    return(
      <Col xs={6} md={4} className="text-center">
          <div className="card image-card">
            <div className="card-title">
              <div className="overlay">
                <div className="overlay-info">
                  {this.props.name}
                </div>
              </div>
              <img onError={this.addDefaultSrc} src={this.props.src} alt='Wtf'/ >

            </div>
            <div className="card-body">
              <p>{this.props.name}</p>
            </div>
          </div>
      </Col>
    )
  }
}
