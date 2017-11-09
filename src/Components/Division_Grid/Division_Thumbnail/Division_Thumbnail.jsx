import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Division_Thumbnail extends Component {
renderOverlay() {
  if (this.props.overlay) {
    return (<div className="overlay">
      <div className="overlay-info">
        <h2 class="overlay-info-title">{this.props.name}</h2>
        <div className="overlay-info-body">
          <p><b>Conference: </b> {this.props.conference}</p>
          <p><b>Inaugural Season: </b>{this.props.inauguralseason}</p>
          <p><b>Division Champion: </b> {this.props.divchamp}</p>
          <p><b>Most Division Titles: </b> {this.props.mostdivtitles}</p>
        </div>
      </div>
    </div>);
  } else {
    return (<div></div>);
  }
}
  render(){
    return(
      <Col xs={6} sm={4} className="text-center">
          <div className="card thumbnail-card image-card white-card">
            <div className="card-title">
              {this.renderOverlay()}
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
