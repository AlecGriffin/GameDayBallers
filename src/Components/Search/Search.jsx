import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx'

import PlayerThumbnail from '../Player_Grid/Player_Thumbnail/Player_Thumbnail.jsx';
import TeamThumbnail from '../Team_Grid/Team_Thumbnail/Team_Thumbnail.jsx';
import CoachThumbnail from '../Coach_Grid/Coach_Thumbnail/Coach_Thumbnail.jsx';
import DivisionThumbnail from '../Division_Grid/Division_Thumbnail/Division_Thumbnail.jsx';



export default class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      players: [],
      coaches: [],
      teams: [],
      divisions: [],
    }
  }

  componentDidMount(){
    // var url = ''
    // axios.get().then(()=>{
    //
    // })

  }

  RenderPlayerThumbnail(player){
    return(
      <Link key={player.name } to= {player.url}>
        <PlayerThumbnail overlay={true} name={player.name} src={player.image_url}
          team={player.team} position={player.position} dob={player.dob} height={player.height}
          jerseyNumber={player.jersey_number} weight={player.weight}/>
      </Link>
    );
  }

  RenderCoachThumbnail(coach){
    return(
      <Link key={coach.name } to= {coach.url}>
        <CoachThumbnail overlay={true} name={coach.name} src={coach.image_url}
          dob={coach.dob} winloss ={coach.win_loss_percentage} team = {coach.current_team}/>
        </Link>
      );
  }

  RenderTeamThumbnail(team){
    return(
      <Link key={team.name } to= {team.url}>
        <TeamThumbnail overlay={true} name={team.name} src={team.image_url}
          city={team.city} arena={team.arena} conference={team.conference}
          division={team.division}/>
        </Link>
    );
  }

  RenderDivisionThumbnail(division){
    return(
      <Link key={division.name} to= {division.url}>
        <DivisionThumbnail name={division.name} src={division.image_url}
          divchamp={division.div_champ} conference={division.conference}
          mostdivtitles={division.most_div_titles}
          inauguralseason={division.inaugural_season}/>
      </Link>
    );
  }


  // Render Everything
  // RenderPlayerThumbnails(){
  //   var result = []
  //
  //   var players = this.state.players
  //   for(let i = 0; (i < ...); i++){
  //     var player = this.state.players[i]
  //     result.push(this.RenderPlayerThumbnail(player));
  //   }
  //   return result;
  // }

  render(){
    //get search input text by url
    var inputText = this.props.match.params.searchTopic
    var splitResult = inputText.split("%20")
    var result = inputText.replace(/%20/g, " ")


    return (
      <div className='main'>
          <p>{inputText}</p>
          <Row>
            {/* {this.RenderPlayerThumbnails()} */}
          </Row>
      </div>
    )
  }
}
