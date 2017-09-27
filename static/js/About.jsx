import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
  render() {


    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // <-----Styling variables ----->
    var marginLeft = {
      // margin: ' 0% 0% 0% 16.5%'
      marginLeft: '16.5%'
    };

    var marginRight = {
      marginRight: '16.5%'
    };
    // <---------------------------->

    return (
    <div class="main">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Certified Ballers</h1>
      </div>
    </div>

      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title">Alec Griffin</h4>
            <p class="card-text">
              <strong>About:</strong>
            </p>

            <p class="card-text">
              <strong>Major Responsibilities:</strong>
            </p>

            <p class="card-text">
              <strong>No. of Commits:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Issues:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Unit Tests:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>
          </div>
        </div>


        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title">Regan Brickman</h4>
            <p class="card-text">
              <strong>About:</strong>
            </p>

            <p class="card-text">
              <strong>Major Responsibilities:</strong>
            </p>

            <p class="card-text">
              <strong>No. of Commits:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Issues:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Unit Tests:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>
          </div>
        </div>


        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title">Andrew Duna</h4>
            <p class="card-text">
              <strong>About:</strong>
            </p>

            <p class="card-text">
              <strong>Major Responsibilities:</strong>
            </p>

            <p class="card-text">
              <strong>No. of Commits:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Issues:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Unit Tests:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>
          </div>
        </div>
      </div>


      <div class="card-deck">
        <div class="card" style= {marginLeft}>
          <img class="card-img-top" src="..." alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title">Nihal Dhamani</h4>
            <p class="card-text">
              <strong>About:</strong>
            </p>

            <p class="card-text">
              <strong>Major Responsibilities:</strong>
            </p>

            <p class="card-text">
              <strong>No. of Commits:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Issues:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Unit Tests:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>
          </div>
        </div>


        <div class="card" style={marginRight}>
          <img class="card-img-top" src="..." alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title">Vikram Idury</h4>
            <p class="card-text">
              <strong>About:</strong>
            </p>

            <p class="card-text">
              <strong>Major Responsibilities:</strong>
            </p>

            <p class="card-text">
              <strong>No. of Commits:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Issues:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>

            <p class="card-text">
              <strong>No. of Unit Tests:</strong> {Math.round(getRandomArbitrary(5, 20))}
            </p>
          </div>
        </div>

      </div>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">Project Details</h1>
        </div>
      </div>


      {/* <!-- stats:
          total no. of commits
          total no. of issues
          total no. of unit tests
          a link to the Apiary API
          a link to the GitHub Repo
          a link to the Trello --> */}

    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Project Stats</h2>
        <p class="card-text">
          <strong>Total No. of Commits:</strong> {Math.round(getRandomArbitrary(5, 50))}
        </p>

        <p class="card-text">
          <strong>Total No. of Issues:</strong> {Math.round(getRandomArbitrary(5, 50))}
        </p>

        <p class="card-text">
          <strong>Apiary:</strong> {Math.round(getRandomArbitrary(5, 50))}
        </p>

        <p class="card-text">
          <strong>Github Repo:</strong> {Math.round(getRandomArbitrary(5, 50))}
        </p>

        <p class="card-text">
          <strong>Trello</strong> {Math.round(getRandomArbitrary(5, 50))}
        </p>

      </div>
    </div>

    {/* <!-- >data:
        links to the data sources
        description of how each was scraped --> */}

    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Data</h2>
        <a href="https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation" class="card-link">Python API for NBA.com</a>
        <a href="https://www.mysportsfeeds.com/data-feeds/" class="card-link">www.mysportsfeeds.com</a>
      </div>
    </div>

    {/* <!-- ->tools:
        tools used
        describe their use
        special focus on optional tools that were not required --> */}

    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Tools</h2>
        <p>
          Google Cloud Platform,
          React,
          Flask,
          Bootstrap,
          Slack,
          Trello,
          Apiary,
          Planitpoker,
          Git/Github,
          Travis CI
        </p>

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
