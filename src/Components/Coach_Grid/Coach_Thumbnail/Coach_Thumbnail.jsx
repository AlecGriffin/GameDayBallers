import React, {Component} from 'react'
import { Col } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';

export default class Coach_Thumbnail extends Component {

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  renderOverlay() {
    var search = "";
    var searchClass = "";
    if (this.props.search !== "" && this.props.search != null) {
      search = this.props.search;
      searchClass = "overlay-search";
    }

    if (this.props.overlay) {
      return (<div className={"overlay " + searchClass}>
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
              <b>Team: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.team}/>
            </p>
            <p>
              <b>DOB: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.dob}/>
            </p>
            <p>
              <b>Win/Loss Percentage: </b>
              <Highlighter
                highlightStyle={{ backgroundColor: '#f18521' }}
                autoEscape={true}
                searchWords={search.split(/\s/)}
                textToHighlight={this.props.winloss}/>
            </p>
          </div>
        </div>
      </div>);
    } else {
      return (<div></div>);
    }
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
                {this.renderOverlay()}
              </div>
              <div className="card-body">
                {this.props.name}
              </div>
            </div>
        </Col>
    );
  }
}
