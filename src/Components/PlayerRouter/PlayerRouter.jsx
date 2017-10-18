import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from '../Player/Player.jsx';
import Players from '../Players/Players.jsx';

 const PlayerRouter = () => (
  <Switch>
    <Route exact path='/players' component={Players}/>
    <Route path='/players/:name' component={Player}/>
  </Switch>
);
export default PlayerRouter;
