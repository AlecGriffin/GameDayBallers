import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from '../Player/Player.jsx';

export default class Players extends Component {
  render(){
    return(
      <div class="main">

        <div class="image-grid">
          <div class="grid-title">
            <h3>Players</h3>
          </div>
          <div class="row">
            <div class="grid-element col-md-4 col-6">
            <a href="/players/jamesharden">
              <div class="card image-card">
                <div class="card-title">
                  <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png"/>
                </div>
                <div class="card-body">
                  James Harden
                </div>
              </div>
            </a>
            </div>
            <div class="grid-element col-md-4 col-6">
              <a href="/players/kawhileonard">
                <div class="card image-card">
                  <div class="card-title">
                    <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202695.png"/>
                  </div>
                  <div class="card-body">
                    Kawhi Leonard
                  </div>
                </div>
              </a>
            </div>
            <div class="grid-element col-md-4 col-6">
              <a href="/players/lebronjames">
                <div class="card image-card">
                  <div class="card-title">
                    <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png"/>
                  </div>
                  <div class="card-body">
                    LeBron James
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
