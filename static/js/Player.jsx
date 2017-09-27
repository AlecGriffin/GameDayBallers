import React from 'react';
import ReactDOM from 'react-dom';

export default class Player extends React.Component {
  render() {
    var url = window.location.href;
    var playerName = url.split('/')[url.split('/').length - 1];
    var player = getPlayer(playerName);
    var teamURL = "/teams/" + player.teamURL;
    var prenbaURL = "/pre-nba/" + player.prenbaURL;

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
                    <a href={teamURL}>{ player.team }</a>
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
            <div className="card">
              <div className="card-head">
                <h5>Past Teams</h5>
              </div>
              <ul className="card-list">
                <li>
                  Past team
                </li>
                <li>
                  Past team
                </li>
                <li>
                  Past team
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="card-head">
                <h5>Recognitions</h5>
              </div>
              <ul className="card-list">
                <li>
                  Award
                </li>
                <li>
                  Award
                </li>
                <li>
                  Award
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
  <Player/>,
  document.getElementById('player')
);
