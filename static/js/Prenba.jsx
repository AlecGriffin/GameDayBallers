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
              Mascot: {}
            </div>

            <div className="roster-wrapper">
              <div className="roster">
                Players
              </div>
            </div>

          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-head">
                <h5>Titles</h5>
              </div>
              <ul className="card-list">
                <li>
                  Title
                </li>
                <li>
                  Title
                </li>
                <li>
                  Title
                </li>
              </ul>
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
