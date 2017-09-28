import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
  render() {


    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    return (
    <div className="main">

    <div className="card display-card">
      <div className="card-body">
        <h3 className="display-3">Certified Ballers</h3>
      </div>
    </div>

    <div className="row">
      <div className="col-md-4">
          <div className="card image-card full-image">
            <div className="card-title">
              Alec Griffin
              <img src="https://avatars0.githubusercontent.com/u/8799789?v=4&s=460"/>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>About: </b>Senior Computer Science major
                </li>
                <li>
                  <b>Major Responsibilities: </b>Creating React elements, data collection
                </li>
                <li>
                  <b>No. of Commits: </b> { 10 }
                </li>
                <li>
                  <b>No. of Issues:</b> { 3 }
                </li>
                <li>
                  <b>No. of Unit Tests:</b> { 0 }
                </li>
              </ul>
            </div>
          </div>
      </div>

      <div className="col-md-4">
          <div className="card image-card full-image">
            <div className="card-title">
              Regan Brickman
              <img src="https://avatars1.githubusercontent.com/u/17559269?v=4&s=460"/>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>About: </b>Senior Computer Science major
                </li>
                <li>
                  <b>Major Responsibilities: </b>Final Report, Pre-NBA page
                </li>
                <li>
                  <b>No. of Commits: </b> { 2 }
                </li>
                <li>
                  <b>No. of Issues:</b> { 3 }
                </li>
                <li>
                  <b>No. of Unit Tests:</b> { 0 }
                </li>
              </ul>
            </div>
          </div>
      </div>

      <div className="col-md-4">
          <div className="card image-card full-image">
            <div className="card-title">
              Andrew Duna
              <img src="https://avatars0.githubusercontent.com/u/14189687?v=4&s=460"/>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>About: </b>Senior Computer Science major
                </li>
                <li>
                  <b>Major Responsibilities: </b>Front-end, data collection
                </li>
                <li>
                  <b>No. of Commits: </b> { 20 }
                </li>
                <li>
                  <b>No. of Issues:</b> { 3 }
                </li>
                <li>
                  <b>No. of Unit Tests:</b> { 0 }
                </li>
              </ul>
            </div>
          </div>
      </div>

      <div className="col-md-2"></div>

      <div className="col-md-4">
          <div className="card image-card full-image">
            <div className="card-title">
              Nihal Dhamani
              <img src="https://avatars3.githubusercontent.com/u/20764557?v=4&s=460"/>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>About: </b>Junior Computer Science major
                </li>
                <li>
                  <b>Major Responsibilities: </b>Front-end, hosting setup
                </li>
                <li>
                  <b>No. of Commits: </b> { 10 }
                </li>
                <li>
                  <b>No. of Issues:</b> { 3 }
                </li>
                <li>
                  <b>No. of Unit Tests:</b> { 0 }
                </li>
              </ul>
            </div>
          </div>
      </div>

      <div className="col-md-4">
          <div className="card image-card full-image">
            <div className="card-title">
              Vikram Idury
              <img src="https://avatars3.githubusercontent.com/u/7564838?v=4&s=460"/>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>About: </b>Junior Computer Science major
                </li>
                <li>
                  <b>Major Responsibilities: </b>GCP setup, apiary documentation
                </li>
                <li>
                  <b>No. of Commits: </b> { 2 }
                </li>
                <li>
                  <b>No. of Issues:</b> { 4 }
                </li>
                <li>
                  <b>No. of Unit Tests:</b> { 0 }
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>

      <div className="card display-card">
        <div className="card-body">
          <h1 className="display-3">Project Details</h1>
        </div>
      </div>


      {/* <!-- stats:
          total no. of commits
          total no. of issues
          total no. of unit tests
          a link to the Apiary API
          a link to the GitHub Repo
          a link to the Trello --> */}
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-title">
              Project Stats
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <b>Total No. of Commits:</b> { 41 }
                </li>
                <li>
                  <b>Total No. of Issues:</b> { 16 }
                </li>
                <li>
                  <a href="http://docs.gamedayballers.apiary.io/" className="card-link">Apiary Link</a>
                </li>
                <li>
                  <a href="https://github.com/GameDayBallers/GameDayBallers" className="card-link">Github Repo Link</a>
                </li>
                <li>
                  <a href="https://trello.com/b/ePPWWAuD/swe-project" className="card-link">Trello Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div className="card">
            <div class="card-title">
              Data
            </div>
            <div className="card-body">
              <ul>
                <li>
                    <a href="https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation" className="card-link">Python API for NBA.com</a>
                </li>
                <li>
                  <a href="https://www.mysportsfeeds.com/data-feeds/" className="card-link">www.mysportsfeeds.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    {/* <!-- >data:
        links to the data sources
        description of how each was scraped --> */}



    {/* <!-- ->tools:
        tools used
        describe their use
        special focus on optional tools that were not required --> */}

    <div className="card">
      <div className="card-title">
        Tools
      </div>
      <div className="card-body tools">
        <div className="row">
          <div className="grid-element col-sm-4">
            Google Cloud Platform
          </div>
          <div className="grid-element col-sm-4">
            Flask
          </div>
          <div className="grid-element col-sm-4">
            Bootstrap
          </div>
          <div className="grid-element col-sm-4">
            Slack
          </div>
          <div className="grid-element col-sm-4">
            Trello
          </div>
          <div className="grid-element col-sm-4">
            Apiary
          </div>
          <div className="grid-element col-sm-4">
            Planitpoker
          </div>
          <div className="grid-element col-sm-4">
            Git/Github
          </div>
          <div className="grid-element col-sm-4">
            Travis CI
          </div>
        </div>

      </div>
    </div>

    </div>

    );
  }
}

ReactDOM.render(
  <About/>,
  document.getElementById('about')
);
