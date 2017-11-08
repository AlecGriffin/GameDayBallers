import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Player_Thumbnail extends Component {
  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  renderOverlay() {
    if (this.props.overlay) {
      return (<div className="overlay">
        <div className="overlay-info">
          <h2 class="overlay-info-title">{this.props.name} #{this.props.jerseyNumber}</h2>
          <div className="overlay-info-body">
            <p><b>Position: </b>{this.props.position}</p>
            <p><b>Date of Birth: </b> {this.props.dob}</p>
            <p><b>Height: </b> {this.props.height}</p>
            <p><b>Weight: </b> {this.props.weight}</p>
          </div>
        </div>
      </div>);
    } else {
      return (<div></div>);
    }
  }

  render(){
    return(
      <Col xs={6} md={4} className="text-center">
          <div className="card thumbnail-card image-card">
            <div className="card-title">
              { this.renderOverlay() }
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
