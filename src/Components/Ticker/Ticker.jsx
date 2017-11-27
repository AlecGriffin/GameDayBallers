import React, { Component } from 'react';
import './ticker.css';
import calendarData from './calendar_data.json';
import {Link} from 'react-router-dom'

export default class Ticker extends Component {

  buildTime(d) {
        var h = d.getHours() - 12
        var m = this.addZero(d.getMinutes());
        return (h + ":" + m)
    }

    addZero(i) {
        return i < 10 ? "0" + i : i
    }

  render(){
    var games = calendarData.lscd[2].mscd.g.map( (game) => {

      var gameDate = new Date(Date.parse(game.gdte))
      var today = new Date()
      var weekFromNow = new Date()
      weekFromNow.setDate(today.getDate() + 1)

      if(gameDate.getDate() + 1 === today.getDate()) {
        var team1_1 = game.h.tc
        var team1_2 = game.h.tn
        var lowerCaseNameTeam1 = team1_1 + team1_2
        lowerCaseNameTeam1 = lowerCaseNameTeam1.toLowerCase().replace(' ', '')

        var team2_1 = game.v.tc
        var team2_2 = game.v.tn
        var lowerCaseNameTeam2 = team2_1 + team2_2
        lowerCaseNameTeam2 = lowerCaseNameTeam2.toLowerCase().replace(' ', '')

        return (
          <div className="ticker__item" key={lowerCaseNameTeam1 + lowerCaseNameTeam2}>
              <Link to={'/teams/' + lowerCaseNameTeam1}>{game.h.tc} {game.h.tn}</Link>
               {' vs. '}
              <Link to={'/teams/' + lowerCaseNameTeam2}>{game.v.tc} {game.v.tn}</Link>
               {' - ' + this.buildTime(new Date(game.etm)) + 'ET'}
          </div>

        )
      }
    })

    return(
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item"> <strong>Today's Games:</strong></div>
            {games}
          </div>
        </div>
    )
  }
}
