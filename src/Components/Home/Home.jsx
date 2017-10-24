import React, {Component} from 'react';
import {Carousel, Row} from 'react-bootstrap';
import { Timeline } from 'react-twitter-widgets';

export default class Home extends Component {
  render(){
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
          <div class="main">
            <h1 class="display-3">Welcome to Gameday Ballers!</h1>
            <p class="lead">I hope you are ready to ball.</p>

            <Row>
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
              <div class="tweets-container col-md-3">
                {timeline}
              </div>
            </Row>
          </div>
    );
  }
}
