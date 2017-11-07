import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx'


export default class Search extends Component {
  render(){

    //get search input text by url
    var url = window.location.href;
    var inputText = url.split('/')[url.split('/').length - 1]
    var splitResult = inputText.split("%20")
    var result = inputText.replace(/%20/g, " ")

    for (var i=0; i < splitResult.length; i++) {
        console.log(splitResult[i])
    }
    console.log(result)

    return (
      <div className='main'>
          <p>Hello</p>
      </div>
    )
  }
}
