import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';
import No_Image from './no_image.png'

export default class Player_Thumbnail extends Component {
  addDefaultSrc(ev){
    // ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
    ev.target.src = No_Image
  }

  renderOverlay() {
    if (this.props.overlay) {
      var search = "";
      var searchClass = "";
      if (this.props.search !== "" && this.props.search != null) {
        search = this.props.search;
        searchClass = "overlay-search";
      }

      return (<div className={"overlay " + searchClass}>
        <div className="overlay-info">
            <h2 className='overlay-info-title'><Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.name + ' #' + this.props.jerseyNumber}
              /></h2>
          <div className="overlay-info-body">
            <p>
              <b>Team: </b>
              <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.team}
              />
            </p>
            <p>
              <b>Position: </b>
              <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.position}
              />
            </p>
            <p>
              <b>Date of Birth: </b>
              <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={this.props.dob}
              />
            </p>
            <p>
              <b>Height: </b>
              <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={'' + this.props.height}
              />
            </p>
            <p>
              <b>Weight: </b>
              <Highlighter
              highlightStyle={{ backgroundColor: '#f18521' }}
              autoEscape={true}
              searchWords={search.split(/\s/)}
              textToHighlight={'' + this.props.weight}
              />
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
      <Col xs={6} md={4} className="text-center">
          <div className="card thumbnail-card image-card">
            <div className="card-title">
              { this.renderOverlay() }
              <img onError={this.addDefaultSrc} src={this.props.src} alt={this.props.name}/>
            </div>
            <div className="card-body">
              <p>{this.props.name}</p>
            </div>
          </div>
      </Col>
    )
  }
}
