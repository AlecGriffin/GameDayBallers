import React, {Component} from 'react';
import Team from '../Team/Team.jsx';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';


export default class Teams extends Component {
  render(){
    return(
          <Grid>
            <Row>
              <Team name="San Antonio Spurs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
              <Team name="San Antonio Spurs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
              <Team name="San Antonio Spurs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png"/>
            </Row>
          </Grid>
    );
  }
}
