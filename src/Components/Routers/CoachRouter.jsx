import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Coach from '../Coach/Coach.jsx';
import Coach_Grid from '../Coach_Grid/Coach_Grid.jsx';
import Team from '../Team/Team.jsx'

 const CoachRouter = () => (
  <Switch>
    <Route exact path='/coaches' component={Coach_Grid}/>
    <Route path='/coaches/:name' component={Coach}/>
  </Switch>
 );
export default CoachRouter;
