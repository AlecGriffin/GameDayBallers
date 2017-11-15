import React, { Component } from 'react';
import './ticker.css';
import calendarData from '../../NBA_Calendar_Data/calendar_data.json';
import {Link} from 'react-router-dom'

export default class Ticker extends Component {

  buildTime(d) {
        var x = document.getElementById("demo");
        var h = d.getHours() - 12
        var m = this.addZero(d.getMinutes());
        var s = this.addZero(d.getSeconds());
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

      if(gameDate >= today && gameDate <= weekFromNow){
        var team1_1 = game.h.tc
        var team1_2 = game.h.tn
        var lowerCaseNameTeam1 = team1_1 + team1_2
        lowerCaseNameTeam1 = lowerCaseNameTeam1.toLowerCase().replace(' ', '')

        var team2_1 = game.v.tc
        var team2_2 = game.v.tn
        var lowerCaseNameTeam2 = team2_1 + team2_2
        lowerCaseNameTeam2 = lowerCaseNameTeam2.toLowerCase().replace(' ', '')

        return (
          // <Col sm={6}>
          <div class="ticker__item">
            {/* <div className="card image-card"> */}
              {/* <div className="card-title"> */}


              <Link to={'/teams/' + lowerCaseNameTeam1}>{game.h.tc} {game.h.tn}</Link>
               {' vs. '}
              <Link to={'/teams/' + lowerCaseNameTeam2}>{game.v.tc} {game.v.tn}</Link>
               {' - ' + this.buildTime(new Date(game.etm)) + 'ET'}



              {/* </div> */}
              {/* <div className="card-body text-left"> */}
                {/* <p><strong>Location:</strong> {game.an}</p> */}
                {/* <p><strong>Date:</strong> {(new Date(Date.parse(game.gdte))).toDateString()} </p> */}
                {/* <p><strong>Time:</strong> {this.buildTime(new Date(game.etm))} ET</p> */}
              {/* </div> */}
            {/* </div> */}
          </div>

        )
      }
    })

    return(
        <div className="ticker-wrap">
          <div className="ticker">
            <div class="ticker__item"> <strong>Today's Games:</strong></div>
            {games}
          </div>
        </div>
    )
  }
}
