import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';


export default class Home extends Component {
  render(){
    return(
          <div class="main">
            <h1 class="display-3">Welcome to Gameday Ballers!</h1>
            <p class="lead">I hope you are ready to ball.</p>

            <div class="row">
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
              {/* <div class="tweets-container col-md-3">
                <a class="twitter-timeline"
                   href="https://twitter.com/search?q=from%3ANBA%2C%20OR%20from%3AESPNNBA%2C%20OR%20from%3Awojespn%2C%20OR%20from%3Ashamscharania%2C%20OR%20from%3ATheVertical%2C%20OR%20from%3AESPNSteinLine%2C%20OR%20from%3ABillSimmons%2C%20OR%20from%3AZachLowe_NBA"
                   data-widget-id="912534238083321859">Tweets about from:NBA, OR from:ESPNNBA, OR from:wojespn, OR from:shamscharania, OR from:TheVertical, OR from:ESPNSteinLine, OR from:BillSimmons, OR from:ZachLowe_NBA</a>
                   <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
              </div> */}
            </div>
          </div>
    );
  }
}
