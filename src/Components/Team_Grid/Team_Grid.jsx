import React, {Component} from 'react';
import Team_Thumbnail from './Team_Thumbnail/Team_Thumbnail.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Team_Grid extends Component {
  render(){
    return(
          <Grid>
            <Row>
              <Link to='/teams/sanantoniospurs'>
                <Team_Thumbnail name="San Antonio Spurs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
              </Link>
              <Team_Thumbnail name="San Antonio Spurs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
              <Team_Thumbnail name="San Antonio Spurs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
            </Row>
          </Grid>
    );
  }
}
