import React from 'react';
import ReactDOM from 'react-dom';
import { getPreNba } from '../json/pre_nba_data.js';

export default class PreNba extends React.Component {
  render() {
    var url = window.location.href;
    var schoolName = url.split('/')[url.split('/').length - 1];
    var preNba = getPreNba(schoolName);

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
                    {preNba.city}, {preNba.state} {preNba.country}
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              Mascot: {preNba.mascot}
            </div>

            <div className="roster-wrapper">
              <div className="roster">
                Players: {preNba.players}
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
