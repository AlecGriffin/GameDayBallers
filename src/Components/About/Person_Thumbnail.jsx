import React, {Component} from 'react';
import '../../css/main.css';


export default class Person_Thumbnail extends Component{
  render() {
    return (
      <div className="card image-card full-image">
        <div className="card-title">
          {this.props.name}
          <img src={this.props.img_src} alt="Certified Baller"/>
        </div>
        <div className="card-body">
          <ul>
            <li>
              <b>About: </b>{this.props.about}
            </li>
            <li>
              <b>Major Responsibilities: </b> {this.props.responsibilities}
            </li>
            <li>
              <b>No. of Commits: </b> { this.props.commits }
            </li>
            <li>
              <b>No. of Issues:</b> { this.props.issues }
            </li>
            <li>
              <b>No. of Unit Tests:</b> { this.props.tests }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
