import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from '../Player/Player.jsx';
import Player_Grid from '../Player_Grid/Player_Grid.jsx';

 const PlayerRouter = () => (
  <Switch>
    <Route exact path='/players' component={Player_Grid}/>
    <Route path='/players/:name' component={Player}/>
  </Switch>
 );
export default PlayerRouter;
