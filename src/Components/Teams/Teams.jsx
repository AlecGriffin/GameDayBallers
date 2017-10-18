import React, {Component} from 'react'


export default class Teams extends Component {
  render(){
    return(
          <div class="main">
            <div class="image-grid">
              <div class="grid-title">
                <h3>Teams</h3>
              </div>
              <div class="row">
                <div class="grid-element col-md-4 col-6">
                  <a href="/teams/houstonrockets">
                    <div class="card image-card white-card">
                      <div class="card-title">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/400px-Houston_Rockets.svg.png"/>
                      </div>
                      <div class="card-body">
                        Houston Rockets
                      </div>
                    </div>
                  </a>
                </div>
                <div class="grid-element col-md-4 col-6">
                  <a href="/teams/sanantoniospurs">
                    <div class="card image-card white-card">
                      <div class="card-title">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
                      </div>
                      <div class="card-body">
                        San Antonio Spurs
                      </div>
                    </div>
                  </a>
                </div>
                <div class="grid-element col-md-4 col-6">
                  <a href="/teams/clevelandcavaliers">
                    <div class="card image-card white-card">
                      <div class="card-title">
                        <img src="http://logos-download.com/wp-content/uploads/2016/04/Cleveland_Cavaliers_logo_logotype_emblem.png"/>
                      </div>
                      <div class="card-body">
                        Cleveland Cavaliers
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
