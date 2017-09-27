import React from 'react';
import ReactDOM from 'react-dom';
import { getPlayer } from '../json/player_data.js';

export default class Player extends React.Component {
  render() {
    var url = window.location.href;
    var playerName = url.split('/')[url.split('/').length - 1];
    var player = getPlayer(playerName);
    var prenbaURL = "/pre-nba/" + player.prenbaURL;

    var pastTeams = player.past_teams.map((team) =>
      <li key={team.toLowerCase().replace(/\s+/g, '')}>
        <a>{team}</a>
      </li>
    );
    var recognitions = player.recognitions.map((rec) =>
    <li key={rec.toLowerCase().replace(/\s+/g, '').split('(')[0]}>
      {rec}
    </li>
    );

    var pastTeamsCard;
    if (player.past_teams.length != 0) {
      pastTeamsCard = (
        <div className="card">
          <div className="card-head">
            <h5>Past Teams</h5>
          </div>
          <ul className="card-list">
            { pastTeams }
          </ul>
        </div>);
    }

    var recognitionsCard;
    if (player.recognitions.length != 0) {
      recognitionsCard = (
        <div className="card">
          <div className="card-head">
            <h5>Recognitions</h5>
          </div>
          <ul className="card-list">
            { recognitions }
          </ul>
        </div>);
    }

    return (
      <div className="main">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="img-container col-sm-6">
                <img src={player.image_url}/>
              </div>
              <div className="info col-sm-6">
                <ul>
                  <li id="nameAndJerseyNumber">
                    { player.name } #{ player.jersey_number }
                  </li>
                  <li id="team">
                    <a href={ "/teams/" + player.team.toLowerCase().replace(/\s+/g, '') }>{ player.team }</a>
                  </li>
                  <li id="position">
                    Position: { player.position }
                  </li>
                  <li id="dob">
                    Date of Birth: { player.dob }
                  </li>
                  <li id="height">
                    Height: { player.height }
                  </li>
                  <li id="weight">
                    Weight: { player.weight }
                  </li>
                  <li id="country">
                    Country of Origin: { player.country }
                  </li>
                  <li id="prenba">
                    <a href={ prenbaURL }>{ player.prenba }</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="table-wrapper">
              <h4>Career Stats</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>MPG</th>
                    <th>FG%</th>
                    <th>3P%</th>
                    <th>FT%</th>
                    <th>PPG</th>
                    <th>RPG</th>
                    <th>APG</th>
                    <th>BPG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ player.career_stats.minutes_per_game }</td>
                    <td>{ player.career_stats.field_goal_percentage }</td>
                    <td>{ player.career_stats.three_point_percentage }</td>
                    <td>{ player.career_stats.free_throw_percentage }</td>
                    <td>{ player.career_stats.points_per_game }</td>
                    <td>{ player.career_stats.rebounds_per_game }</td>
                    <td>{ player.career_stats.assists_per_game }</td>
                    <td>{ player.career_stats.blocks_per_game }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-3">
            { pastTeamsCard }

            { recognitionsCard }
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Player/>,
  document.getElementById('player')
);
