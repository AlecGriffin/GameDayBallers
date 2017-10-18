import React, {Component} from 'react'


export default class Coaches extends Component {
  render(){
    return(
      <div class="main">
        <div class="image-grid">
          <div class="grid-title">
            <h3>Coaches</h3>
          </div>
          <div class="row">
            <div class="grid-element col-md-4 col-6">
              <a href="/coaches/mikedantoni">
                <div class="card image-card full-image">
                  <div class="card-title">
                    <img src="http://ww4.hdnux.com/photos/46/55/57/10148807/3/920x1240.jpg"/>
                  </div>
                  <div class="card-body">
                    Mike D'Antoni
                  </div>
                </div>
              </a>
            </div>
            <div class="grid-element col-md-4 col-6">
              <a href="/coaches/greggpopovich">
                <div class="card image-card full-image">
                  <div class="card-title">
                    <img src="https://i.imgur.com/B1UfYJl.jpg"/>
                  </div>
                  <div class="card-body">
                      Gregg Popovich
                  </div>
                </div>
              </a>
            </div>
            <div class="grid-element col-md-4 col-6">
              <a href="/coaches/tyronnlue">
                <div class="card image-card full-image">
                  <div class="card-title">
                    <img src="http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667"/>
                  </div>
                  <div class="card-body">
                    Tyronn Lue
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
