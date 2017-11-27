import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Team from '../Team/Team.jsx';
import Team_Grid from '../Team_Grid/Team_Grid.jsx';

 const TeamRouter = () => (
  <Switch>
    <Route exact path='/teams' component={Team_Grid}/>
    <Route exact path='/teams/:name' component={Team}/>
  </Switch>
 );
export default TeamRouter;
