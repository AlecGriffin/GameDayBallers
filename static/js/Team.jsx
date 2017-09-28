import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'react-twitter-widgets'
import { getTeam } from '../json/team_data.js';

export default class Team extends React.Component {
  render() {
    var url = window.location.href;
    var teamName = url.split('/')[url.split('/').length - 1];
    var team = getTeam(teamName);
    var coachURL = "/coaches/" + team.coachURL;

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
          <div className="card-title">
            Championship Titles
          </div>
          <div className="card-body">
            <ul className="card-list">
              <li>
                <b>Championship: </b> { team.titles.championships.join(', ') }
              </li>
              <li>
                <b>Conference: </b> { team.titles.conference_champs.join(', ') }
              </li>
              <li>
                <b>Division: </b> { team.titles.division_champs.join(', ') }
              </li>
            </ul>
          </div>
        </div>);
    }

    var timeline =  (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: team.twitter_name
        }}
        options={{
          username: 'TwitterDev',
          height: '400'
        }}/>
      );

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
            { titlesCard }
            <div className="tweets-container">
              { timeline }
            </div>
          </div>

            <div className="col-md-8">
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
      </div>
    );
  }
}

ReactDOM.render(
  <Team/>,
  document.getElementById('team')
);
