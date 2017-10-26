import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class Player_Thumbnail extends Component {
  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }


  render(){
    return(
      <Col xs={6} sm={4} className="text-center">
          <div className="card image-card">
            <div className="card-title">

              <img onError={this.addDefaultSrc} className="img-responsive" src={this.props.src} alt='No Image Found'/>

            </div>
            <div className="card-body">
              {this.props.name}
            </div>
          </div>
      </Col>
    );
  }
}
