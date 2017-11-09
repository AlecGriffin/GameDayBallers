import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Coach_Thumbnail extends Component {




  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  render(){
    var coach_image_style = {
      width: '100%',
      height: 200,
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }

    return(
        <Col xs={6} sm={4} className="text-center">
            <div className="card thumbnail-card image-card full-image">
              <div style = {coach_image_style} className="card-title">
                <div className="overlay">
                  <div className="overlay-info">
                    <h2 class="overlay-info-title">{this.props.name}</h2>
                    <div className="overlay-info-body">
                      <p><b>Team: </b> {this.props.team}</p>
                      <p><b>DOB: </b>{this.props.dob}</p>
                      <p><b>Win/Loss Percentage: </b> {this.props.winloss}</p>
                    </div>
                  </div>
                </div>
                {/* <div style = {coach_image_style} className="card-title">
                <img style = {coach_image_style} onError={this.addDefaultSrc} src={this.props.src} alt='No Image Found'/> */}
              </div>
              <div className="card-body">
                {this.props.name}
              </div>
            </div>
        </Col>
    );
  }
}
