import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';

export default class Team_Thumbnail extends Component {
  renderOverlay() {
    var search = "";
    if (this.props.search != "" && this.props.search != null) {
      search = this.props.search;
    }

    if (this.props.overlay) {
      return (<div className="overlay">
        <div className="overlay-info">
          <h2 className='overlay-info-title'>
            <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.name}/>
          </h2>
          <div className="overlay-info-body">
            <p>
              <b>City: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.city}/>
            </p>
            <p>
              <b>Arena: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.arena}/>
            </p>
            <p>
              <b>Conference: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.conference}/>
            </p>
            <p>
              <b>Division: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.division}/>
            </p>
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
          <div className="card thumbnail-card image-card white-card team-logo">
            <div className="card-title">
              { this.renderOverlay() }
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
