import React, {Component} from 'react';
import '../../css/main.css';
import Person_Thumbnail from './Person_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail, Clearfix } from 'react-bootstrap';
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
    "responsibilities" : "Creating React elements, data collection",
  },

  "Regan":{
    "name":'Regan Brickman',
    "img_src":'https://avatars1.githubusercontent.com/u/17559269?v=4&s=460',
    "about":'Senior Computer Science major',
    "responsibilities":'Final Report, Pre-NBA page',
  },

 "Andrew":{
    "name": 'Andrew Duna',
    "img_src":'https://avatars0.githubusercontent.com/u/14189687?v=4&s=460',
    "about":'Senior Computer Science major',
    "responsibilities":'Front-end, data collection',
  },

  "Vikram":{
    "name":'Vikram Idury',
    "img_src":'https://avatars3.githubusercontent.com/u/7564838?v=4&s=460',
    "about":'Senior Computer Science major',
    "responsibilities":'GCP setup, apiary documentation',
  },

  "Nihal":{
      "name":'Nihal Dhamani',
      "img_src":'https://avatars3.githubusercontent.com/u/20764557?v=4&s=460',
      "about":'Senior Computer Science major',
      "responsibilities":'Front-end, hosting setup',
  }
}

function generateTools(){
  var result = []
  for(var t of tools){
    result.push(
      <Col sm={4} className="grid-element">
        {t}
      </Col>
    )
  }
  return result
}


function generateThumbnail(person, commits) {
  return(
    <Person_Thumbnail
      name= {person.name}
      img_src= {person.img_src}
      about= {person.about}
      responsibilities= {person.responsibilities}
      commits= {commits}
      issues= {0}
      tests= {0}
    />
  );
}

 export default class About extends Component {
   constructor(props){
     super(props);

     // Set Initial State
     this.state = {
       Total_Commits: 0,
       Alec_Commits: 0,
       Regan_Commits: 0,
       Andrew_Commits: 0,
       Vikram_Commits: 0,
       Nihal_Commits: 0,
       Number_Of_Issues: 0
     };

      // Get Total and Individual Commit Numbers (from Github)
      axios.get("https://api.github.com/repos/GameDayBallers/GameDayBallers/stats/contributors").then(response => {
        var total = response['data'][0]['total'] + response['data'][1]['total'] + response['data'][2]['total']
        this.setState({
           Total_Commits: total,
           Alec_Commits: response['data'][1]['total'],
          //  Regan_Commits: response['data'][#]['total'],
           Andrew_Commits: response['data'][2]['total'],
          //  Vikram_Commits: response['data'][#]['total'],
           Nihal_Commits: response['data'][0]['total']
         })
        });

        // Get Total and Individual Commit Numbers (from Github)
        axios.get("https://api.trello.com/1/lists/59cb1bf501fa898f2408415c/cards").then(response => {
          this.setState({
             Number_Of_Issues: response['data'].length
           })
        });

   }

   render() {

     return(
       <div className="main">
       <div className="card display-card">
         <div className="card-body">
           <h3 className="display-3">Certified Ballers</h3>
         </div>
       </div>

       <Row>
          <Col md={4}>
               {generateThumbnail(Project_Members.Alec, this.state.Alec_Commits)}
          </Col>
           <Col md={4}>
               {generateThumbnail(Project_Members.Regan, this.state.Regan_Commits)}
           </Col>
           <Col md={4}>
               {generateThumbnail(Project_Members.Andrew, this.state.Andrew_Commits)}
           </Col>
         </Row>

         <Row>
           <Col md={2}></Col>
           <Col md={4}>
               {generateThumbnail(Project_Members.Nihal, this.state.Nihal_Commits)}
           </Col>
           <Col md={4}>
               {generateThumbnail(Project_Members.Vikram, this.state.Vikram_Commits)}
           </Col>
       </Row>

         <div className="card display-card">
           <div className="card-body">
             <h1 className="display-3">Project Details</h1>
           </div>
         </div>


         {/* <!-- stats:
             total no. of commits
             total no. of issues
             total no. of unit tests
             a link to the Apiary API
             a link to the GitHub Repo
             a link to the Trello --> */}
         <Row>
           <Col sm={6}>
             <div className="card">
               <div className="card-title">
                 Project Stats
               </div>
               <div className="card-body">
                 <ul>
                   <li>
                     <b>Total No. of Commits:</b> { this.state.Total_Commits }
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
                     <a href="https://utexas.box.com/s/u0t43jc0jag4qg1xbpl2cpixg3ofhbsi" className="card-link">Technical Report Link</a>
                   </li>
                 </ul>
               </div>
             </div>
           </Col>

          <Col sm={6}>
             <div className="card">
               <div className="card-title">
                 Data
               </div>
               <div className="card-body">
                 <ul>
                   <li>
                       <a href="https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation" className="card-link">Python API for NBA.com</a>
                   </li>
                   <li>
                     <a href="https://www.mysportsfeeds.com/data-feeds/" className="card-link">www.mysportsfeeds.com</a>
                   </li>
                 </ul>
               </div>
             </div>
           </Col>
         </Row>


       {/* <!-- >data:
           links to the data sources
           description of how each was scraped --> */}



       {/* <!-- ->tools:
           tools used
           describe their use
           special focus on optional tools that were not required --> */}

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
       </div>
     );
   }
 }
