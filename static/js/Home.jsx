import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <h1 className="display-3">Welcome to Gameday Ballers!</h1>
        <p className="lead">I hope you are ready to ball.</p>

        <div className="row">
          <div className="carousel-container col-md-9">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://cdn.nba.net/nba-drupal-prod/2017-08/SEO-image-NBA-logoman.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="http://www.fbschool.org/_assets/images/basketball.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-08/victor-oladipo-africa.jpg?itok=kmfNF8l8" alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Home/>,
  document.getElementById('home')
);
