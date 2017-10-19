import React, {Component} from 'react'
import PreNBA from '../PreNBA/PreNBA.jsx'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class PreNBA_Container extends Component {
  render(){
    return(
      // <div class="main">
      //
      //   <div class="image-grid">
      //     <div class="grid-title">
      //       <h3>Pre-NBA Affiliations</h3>
      //     </div>
      //     <div class="row">
      //       <div class="grid-element col-md-4 col-6">
      //         <a href="/pre-nba/arizonastate">
      //           <div class="card image-card white-card">
      //             <div class="card-title">
      //               <img src="http://foxsportsuniversity.com/wp-content/uploads/2012/08/ASU-pitchfork_4-dk-bkgd.png"/>
      //             </div>
      //             <div class="card-body">
      //               Arizona State
      //             </div>
      //           </div>
      //         </a>
      //       </div>
      //       <div class="grid-element col-md-4 col-6">
      //         <a href="/pre-nba/sandiegostate">
      //           <div class="card image-card white-card">
      //             <div class="card-title">
      //               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png"/>
      //             </div>
      //             <div class="card-body">
      //               San Diego State
      //             </div>
      //           </div>
      //         </a>
      //       </div>
      //       <div class="grid-element col-md-4 col-6">
      //         <a href="/pre-nba/stvincentstmary">
      //           <div class="card image-card white-card">
      //             <div class="card-title">
      //               <img src="https://usathss.files.wordpress.com/2014/08/2013-stvm-leprechaun-logo.jpg?w=640"/>
      //             </div>
      //             <div class="card-body">
      //               St. Vincent-St. Mary HS (OH)
      //             </div>
      //           </div>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      
      <Grid>
        <Row>
          <PreNBA name="San Diego State" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png"/>
          <PreNBA name="San Diego State" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png"/>
          <PreNBA name="San Diego State" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png"/>
        </Row>
      </Grid>
    );
  }
}
