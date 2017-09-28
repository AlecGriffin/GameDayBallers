import React from 'react';
import ReactDOM from 'react-dom';
import { getPreNba } from '../json/pre_nba_data.js';

export default class PreNba extends React.Component {
  render() {
    var url = window.location.href;
    var schoolName = url.split('/')[url.split('/').length - 1];
    var preNba = getPreNba(schoolName);

    var players = preNba.players.map((player) =>
    <div className="grid-element col-md-4 col-6" key={player.toLowerCase().replace(/\s+/g, '')}>
      <a href={ "/players/" + player.toLowerCase().replace(/\s+/g, '') }>
        { player }
      </a>
    </div>
    );

    return (
      <div className="main">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="img-container col-sm-6">
                <img src={preNba.logo}/>
              </div>
              <div className="info col-sm-6">
                <ul>
                  <li>
                    { preNba.name }
                  </li>
                  <li>
                    {preNba.city}, {preNba.state}
                  </li>
                </ul>
              </div>
            </div>

            <div className="title-photo">
              <h3>Mascot</h3>
              <img src={preNba.mascot_img}/>
              {preNba.mascot}
            </div>

            <div className="roster-wrapper image-grid">
              <div className="grid-title">
                <h3>Players</h3>
              </div>
              <div className="roster row">
                { players }
              </div>
            </div>
          </div>



        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <PreNba/>,
  document.getElementById('preNba')
);
