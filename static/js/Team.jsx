import React from 'react';
import ReactDOM from 'react-dom';
import { getTeam } from '../json/team_data.js';

export default class Team extends React.Component {
  render() {
    var url = window.location.href;
    var teamName = url.split('/')[url.split('/').length - 1];
    var team = getTeam(teamName);
    var coachURL = "/coaches/" + team.coachURL;

    var ctitles = team.titles.championships.map((title) =>
    <li key={title.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {title}
    </li>
    );

    var cctitles = team.titles.conference_champs.map((title) =>
    <li key={title.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {title}
    </li>
    );

    var dtitles = team.titles.division_champs.map((title) =>
    <li key={title.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {title}
    </li>
    );

    var roster = team.current_roster.map((player) =>
    <div className="grid-element col-md-4 col-6" key={player.toLowerCase().replace(/\s+/g, '')}>
      <a>
        { player }
      </a>
    </div>
    );

    var titlesCard;
    if (team.titles.championships.length != 0) {
      titlesCard = (
        <div className="card">
          <div className="card-head">
            <h5>Titles</h5>
          </div>
          <ul className="card-list">
            <li>
              Championship Titles
              <ul>
                { ctitles }
              </ul>
            </li>
            <li>
              Conference Titles
              <ul>
                { cctitles }
              </ul>
            </li>
            <li>
              Division Titles
              <ul>
                { dtitles }
              </ul>
            </li>
          </ul>
        </div>);
    }

    return (
      <div className={"main " + team.color}>
        <div className="row">
          <div className="col-md-4">
            <div className="card image-card white-card">
              <div className="card-title">
                <img src={team.logo_url}/>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>{ team.name }</b>
                  </li>
                  <li>
                    <b>{ team.city }, { team.country }</b>
                  </li>
                  <li>
                    <b>Arena: </b>{ team.arena }
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card grid-card">
                <div className="card-title">
                  Roster
                </div>
                <div className="card-body">

                  <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center">
                      <h3>Head Coach</h3>
                      <a href={ coachURL }>
                        <div className="card image-card full-image">
                          <div className="card-title">
                            <img src={team.coach_img}/>
                          </div>
                          <div className="card-body">
                            {team.head_coach}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="roster-wrapper row">
                    <h3 className="col-sm-12">Players</h3>
                    <div className="roster row">
                      { roster }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">

            <div className="title-photo">
              <h3>Head Coach</h3>
                  <a href={ coachURL }>{ team.head_coach }</a>
            </div>

            <div className="roster-wrapper image-grid">
              <div className="grid-title">
                <h3>Players</h3>
              </div>
              <div className="roster row">
                { roster }
              </div>
            </div>
          </div>

          <div className="col-md-3">
            { titlesCard }
          </div>

      </div>
    );
  }
}

ReactDOM.render(
  <Team/>,
  document.getElementById('team')
);
