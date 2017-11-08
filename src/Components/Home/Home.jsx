import React, {Component} from 'react';
import {Carousel, Row, Col} from 'react-bootstrap';
import { Timeline } from 'react-twitter-widgets';
import calendarData from '../../NBA_Calendar_Data/calendar_data.json'

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



  render(){
    // var gameDate = calendarData.lscd[3].mscd.g[0].gdte
    // console.log(gameDate);
    //
    // var dateObject = new Date(Date.parse(gameDate));
    // console.log(dateObject.toDateString());

    <h1>Upcoming Games:</h1>
    var games = calendarData.lscd[2].mscd.g.map( (game) => {
      var gameDate = new Date(Date.parse(game.gdte))
      var today = new Date()

      var today = new Date()

      // <Col>
      //
      // </Col>
      console.log('Today: ' + today);
      console.log('Game Date: ' + gameDate);
      console.log(today.getTime() >= gameDate.getTime());
      // The today date is after the game date!
      var dateInAWeek = today.setDate(today.getDate() + 7)
      console.log('Date in a Week: ' + dateInAWeek);
      if(dateInAWeek > gameDate.getTime() && today.getTime() > gameDate.getTime()){
        return (
          <Col xs={6} md={4} className="text-center">
              <div className="card image-card">
                <div className="card-title">
                  <div className="overlay">
                    <div className="overlay-info">
                      {game.h.tc} {game.h.tn} vs. {game.v.tc} {game.v.tn}
                    </div>
                  </div>
                  <img  onError={this.addDefaultSrc} src={this.props.src} alt='No Image Found'/>

                </div>
                <div className="card-body">
                  <p>{game.h.tc} {game.h.tn} vs. {game.v.tc} {game.v.tn}</p>
                  <p>Location: {game.an}</p>
                  <p>Date: {(new Date(Date.parse(game.gdte))).toDateString()} </p>

                  <p>Time: {game.etm}</p>
                </div>
              </div>
          </Col>
        )
      }
    })


    var timeline =  (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'NBA'
        }}
        options={{
          username: 'TwitterDev',
          height: '400'
        }}/>
      );

    return(
      <div className="main">
        <div id="home-background"></div>
        <div className="home-logo">
          <img src="https://i.imgur.com/ptTJXyw.png"></img>
        </div>

        <h1>Upcoming Games This Week:</h1>
        <Row>
            {games}
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
