import React, {Component} from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';

export default class Division_Thumbnail extends Component {
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
            <b>Conference: </b>
            <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.conference}/>
          </p>
          <p>
            <b>Inaugural Season: </b>
            <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.inauguralseason}/>
          </p>
          <p>
            <b>Division Champion: </b>
            <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.divchamp}/>
          </p>
          <p>
            <b>Most Division Titles: </b>
            <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.mostdivtitles}/>
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
