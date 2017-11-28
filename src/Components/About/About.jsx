import React, {Component} from 'react';
import PersonThumbnail from './Person_Thumbnail.jsx';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

var tools = [
  "Google Cloud Platform",
  "Flask",
  "Bootstrap",
  "Slack",
  "Trello",
  "Apiary",
  "Planitpoker",
  "Git/GitHub",
  "Travis CI"
]

var Project_Members = {

  "Alec":{
    "name" : "Alec Griffin",
    "img_src" : "https://avatars0.githubusercontent.com/u/8799789?v=4&s=460",
    "about" : "Senior Computer Science major",
    "responsibilities" : "React Front-End, Data Collection, Sorting, Pagination, Search",
    "issues": "10",
    "tests": "0"
  },

  "Regan":{
    "name":'Regan Brickman',
    "img_src":'https://avatars1.githubusercontent.com/u/17559269?v=4&s=460',
    "about":'Senior Computer Science major',
    "responsibilities":'Technical Report, User Stories, React Front-End, Unit Tests, Sorting',
    "issues": "11",
    "tests": "6"
  },

 "Andrew":{
    "name": 'Andrew Duna',
    "img_src":'https://avatars0.githubusercontent.com/u/14189687?v=4&s=460',
    "about":'Senior Computer Science major',
    "responsibilities":'CSS, React Front-End, Data Collection, UI Design, Filtering, Loading Animation',
    "issues": "11",
    "tests": "0"
  },

  "Vikram":{
    "name":'Vikram Idury',
    "img_src":'https://avatars3.githubusercontent.com/u/7564838?v=4&s=460',
    "about":'Junior Computer Science major',
    "responsibilities":'GCP Setup, API Setup, Apiary Documentation, Search',
    "issues": "10",
    "tests": "0"
  },

  "Nihal":{
      "name":'Nihal Dhamani',
      "img_src":'https://avatars3.githubusercontent.com/u/20764557?v=4&s=460',
      "about":'Junior Computer Science major',
      "responsibilities":'React Front-End, Domain Setup, SQL Database, Data Collection, CloudSQL',
      "issues": "11",
      "tests": "10"
  }
}

var scrapingText =
<p>
  Most of our data was scraped from the NBA stats api by following the endpoint documentation. Our MySQL database has six tables including players, coaches, teams, divisions, awards, and prenba. The basic framework for the database was created by iterating over the 30 different teams, getting the basic team information which included information about the head coach and roster, and building the coach and roster tables through the information parsed. The 30 teams produced 498 different player entries, 30 head coach entries, 6 division entries, 160 prenba entries, and 1403 award entries. All the data that we weren’t able to find from the NBA stats API, we found in the MySportsFeeds API. This site provides real time and up to date sports information for not only the NBA, but also all the other major sports. The scraping from this website was pretty straight forward as it included a variety of different feeds to choose from. All of the data we found from MySportsFeeds was used to update the missing data fields we had after we finished with the NBA stats api.
</p>

var aboutText =
<div>
  <p>Gameday Ballers is a web application whose purpose is to organize useful information about the NBA and make the information easy to access. The application can be used to find stats on all basketball teams, players, coaches, and divisions. Our group members are interested in and keep up with the NBA, therefore we felt this would be an appropriate topic for our project and one we would be excited about implementing.</p>
  <p>Gameday Ballers is intended for anyone interested in the NBA. Whether an expert seeking to learn more, a Fantasty Basketball enthusiast trying to keep up with their players, or a newbie wanting to get acquainted with the league, Game Day Ballers has a plethora of information about the league, and it's divisions, teams, coaches, and players.</p>
</div>

function generateTools(){
  var result = []

  for(var t of tools){
    result.push(
      <Col key={t} sm={4} className="grid-element">
        {t}
      </Col>
    )
  }
  return result
}


function generateThumbnail(person, commits) {
  return(
    <PersonThumbnail
      name= {person.name}
      img_src= {person.img_src}
      about= {person.about}
      responsibilities= {person.responsibilities}
      commits= {commits}
      issues= {person.issues}
      tests= {person.tests}
    />
  );
}

 export default class About extends Component {
   constructor(props){
     super(props)

     // Set Initial State
     this.state = {
       Total_Commits: 0,
       Alec_Commits: 0,
       Regan_Commits: 0,
       Andrew_Commits: 0,
       Vikram_Commits: 0,
       Nihal_Commits: 0,
       Number_Of_Issues: 0,
       Number_Of_Tests: 0
     };
   }

   componentDidMount(){

     // Get Total and Individual Commit Numbers (from Github)
     var githubCommitsURL = "https://api.github.com/repos/GameDayBallers/GameDayBallers/stats/contributors"
     axios.get(githubCommitsURL).then(response => {
       let sum = 0

       for(let i = 0; i < response.data.length; i++){
         sum += response.data[i].total
       }

       this.setState({
          Total_Commits: sum,
          Alec_Commits: response.data[2].total,
          //  Regan_Commits: response['data'][#]['total'],
          Andrew_Commits: response.data[3].total,
          Vikram_Commits: response.data[1].total,
          Nihal_Commits: response.data[0].total
        })
       });

      //  Get number of issues on Trello
       var trelloIssuesUrl = "https://api.trello.com/1/lists/59cb1bf501fa898f2408415c/cards"
       axios.get(trelloIssuesUrl).then(response => {
         this.setState({
            Number_Of_Issues: response.data.length
          })
       });
   }

   render() {

     return(
       <div className="main">
         <div className="card display-card">
           <div className="card-body">
             <h1 className="display-3">About</h1>
           </div>
         </div>
         <div className="card card-white">
           <div className="card-body">
             {aboutText}
           </div>
         </div>
       <div className="card display-card">
         <div className="card-body">
           <h1 className="display-3">Certified Ballers</h1>
         </div>
       </div>

       <Row>
          <Col sm={4}>
               {generateThumbnail(Project_Members.Alec, this.state.Alec_Commits)}
          </Col>
           <Col sm={4}>
               {generateThumbnail(Project_Members.Regan, 28 + this.state.Regan_Commits)}
           </Col>
           <Col sm={4}>
               {generateThumbnail(Project_Members.Andrew, this.state.Andrew_Commits)}
           </Col>
         </Row>

         <Row>
           <Col sm={4} smOffset={2}>
               {generateThumbnail(Project_Members.Nihal, this.state.Nihal_Commits)}
           </Col>
           <Col sm={4}>
               {generateThumbnail(Project_Members.Vikram, this.state.Vikram_Commits)}
           </Col>
       </Row>

         <div className="card display-card">
           <div className="card-body">
             <h1 className="display-3">Project Details</h1>
           </div>
         </div>

         <Row>
           <Col sm={6}>
             <div className="card">
               <div className="card-title">
                 Project Stats
               </div>
               <div className="card-body">
                 <ul>
                   <li>
                     <b>Total No. of Commits:</b> { 28 + this.state.Total_Commits }
                   </li>
                   <li>
                     <b>Total No. of Issues:</b> { this.state.Number_Of_Issues }
                   </li>
                   <li>
                     <a href="http://docs.gamedayballers.apiary.io/" className="card-link">Apiary Link</a>
                   </li>
                   <li>
                     <a href="https://github.com/GameDayBallers/GameDayBallers" className="card-link">Github Repo Link</a>
                   </li>
                   <li>
                     <a href="https://trello.com/b/ePPWWAuD/swe-project" className="card-link">Trello Link</a>
                   </li>
                   <li>
                     <a href="https://utexas.box.com/s/0ooqwpb7w6v6a0pi6nbflpnketabaxe2" className="card-link">Technical Report Link</a>
                   </li>
                   <li>
                     <a href="https://dewnah.gitbooks.io/game-day-ballers-uml-diagram/content/" className="card-link">UML Diagram</a>
                   </li>
                   <li>
                     <a href="https://gitpitch.com/GameDayBallers/GameDayBallers" className="card-link">Final Presentation</a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="card">
               <div className="card-title">
                 Tools
               </div>
               <div className="card-body tools">
                 <Row>
                   {generateTools()}
                 </Row>
               </div>
             </div>
           </Col>

          <Col sm={6}>
             <div className="card">
               <div className="card-title">
                 Data
               </div>
               <div className="card-body">
                 <h3>Data Sources</h3>
                 <ul>
                   <li>
                       <a href="https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation" className="card-link">Python API for NBA.com</a>
                   </li>
                   <li>
                     <a href="https://www.mysportsfeeds.com/data-feeds/" className="card-link">www.mysportsfeeds.com</a>
                   </li>
                 </ul>
                 <h3>Scraping</h3>
                 {scrapingText}
               </div>
             </div>
           </Col>
         </Row>
       </div>
     );
   }
 }
