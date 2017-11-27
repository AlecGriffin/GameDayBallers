import React, {Component} from 'react';
import {Carousel, Row, Col} from 'react-bootstrap';
import { Timeline } from 'react-twitter-widgets';
import calendarData from '../Ticker/calendar_data.json'

export default class Home extends Component {
  constructor(props){
    super(props)

    // console.log(calendarData.lscd[1].mscd.g[0])
    // console.log(calendarData.lscd[1].mscd.g[0].h);
    // console.log(calendarData.lscd[1].mscd.g[0].v);



  }

  addDefaultSrc(ev){
    ev.target.src = 'https://dummyimage.com/260x190/9e9e9e/ffffff.png&text=No+Image+Found'
  }

// addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// buildTime(d) {
//       var x = document.getElementById("demo");
//       var h = d.getHours() - 12
//       var m = this.addZero(d.getMinutes());
//       var s = this.addZero(d.getSeconds());
//       return (h + ":" + m)
//   }



  render(){
    // var gameDate = calendarData.lscd[3].mscd.g[0].gdte
    // console.log(gameDate);
    //

    // console.log(dateObject.toDateString());

    // var games = calendarData.lscd[2].mscd.g.map( (game) => {
    //
    //   var gameDate = new Date(Date.parse(game.gdte))
    //   var today = new Date()
    //   var weekFromNow = new Date()
    //   weekFromNow.setDate(today.getDate() + 1)
    //
    //   if(gameDate >= today && gameDate <= weekFromNow){
    //
    //     return (
    //       // <Col sm={6}>
    //       <div class="ticker__item">
    //         <div className="card image-card">
    //           <div className="card-title">
    //             {game.h.tc} {game.h.tn} vs. {game.v.tc} {game.v.tn}
    //           </div>
    //           <div className="card-body text-left">
    //             <p><strong>Location:</strong> {game.an}</p>
    //             <p><strong>Date:</strong> {(new Date(Date.parse(game.gdte))).toDateString()} </p>
    //             {/* <p><strong>Time:</strong> {(new Date(game.etm)).getHours() - 12}:{(new Date(game.etm)).getMinutes()}pm ET</p> */}
    //             <p><strong>Time:</strong> {this.buildTime(new Date(game.etm))} ET</p>
    //           </div>
    //         </div>
    //       </div>
    //
    //       // </Col>
    //     )
    //   }
    // })


    var timeline =  (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'NBA'
        }}
        options={{
          username: 'TwitterDev',
          height: '800'
        }}/>
      );

    return(



      <div className="main">

        <div id="home-background"></div>
        <div className="home-logo">
          <img src="https://i.imgur.com/ptTJXyw.png"></img>
        </div>
        <Row>
          {/* <Col sm={8} className="text-center">
            <div className="card grid-card">
              <div className="card-title" style={{backgroundColor: '#f18521'}}>
                Today's Games
              </div>
              <div className="card-body">
                <Row>
                  {games}
                </Row>
              </div>
            </div>
          </Col> */}
          {/* <Col sm={4}>
            <div className="tweets-container">
              {timeline}
            </div>
          </Col> */}
        </Row>


        {/* <Row>
          <Col sm={3} xs={6} className="text-center">
            <a href="/players">
              <div className="card image-card">
                <div className="card-title">
                </div>
                <div className="card-body">
                  Players
                </div>
              </div>
            </a>
          </Col>
          <Col sm={3} xs={6} className="text-center">
            <a href="/teams">
              <div className="card image-card">
                <div className="card-title">

                </div>
                <div className="card-body">
                  Teams
                </div>
              </div>
            </a>
          </Col>
          <Col sm={3} xs={6} className="text-center">
            <a href="/coaches">
              <div className="card image-card">
                <div className="card-title">

                </div>
                <div className="card-body">
                  Coaches
                </div>
              </div>
            </a>
          </Col>
          <Col sm={3} xs={6} className="text-center">
            <a href="/divisions">
            <div className="card image-card">
              <div className="card-title">

              </div>
              <div className="card-body">
                Divisions
              </div>
            </div>
            </a>
          </Col>
        </Row> */}

        {/*<h1 className="display-3">WELCOME TO GAME DAY BALLERS</h1>
        <h2>I hope you are ready to ball.</h2>*/}
      </div>
    );

    /*
    <div className="main">
      <h1 className="display-3">Welcome to Gameday Ballers!</h1>
      <p className="lead">I hope you are ready to ball.</p>

      <Row>
        <Col md={9}>
        <Carousel>
          <Carousel.Item>
            <img  alt="900x500" src="https://cdn.vox-cdn.com/uploads/chorus_image/image/56042635/632531402.0.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img  alt="900x500" src="http://www.fbschool.org/_assets/images/basketball.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img  alt="900x500" src="https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-08/victor-oladipo-africa.jpg?itok=kmfNF8l8"/>
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col md={3}>
          {timeline}
        </Col>
      </Row>
    </div>
    */
  }
}
