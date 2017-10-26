import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Coach_Thumbnail extends Component {

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  render(){
    return(
      <div className="text-center">
          <div className="card image-card full-image">
            <div className="card-title">
              <img onError={this.addDefaultSrc} src={this.props.src} alt='No Image Found'/>
            </div>
            <div className="card-body">
              {this.props.name}
            </div>
          </div>
      </div>
    );
  }
}
