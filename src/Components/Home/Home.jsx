import React, {Component} from 'react';
//import { Timeline } from 'react-twitter-widgets';

export default class Home extends Component {

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

  render(){

    /*var timeline =  (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'NBA'
        }}
        options={{
          username: 'TwitterDev',
          height: '800'
        }}/>
      );*/

    return(



      <div className="main">

        <div id="home-background"></div>
        <div className="home-logo">
          <img alt="Game Day Ballers Logo" src="https://i.imgur.com/ptTJXyw.png"></img>
        </div>
      </div>
    );
  }
}
