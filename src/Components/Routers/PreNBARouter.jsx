import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import PreNBA from '../PreNBA/PreNBA.jsx';
import PreNBA_Grid from '../PreNBA_Grid/PreNBA_Grid.jsx';

 const PreNBARouter = () => (
  <Switch>
    <Route exact path='/pre-nba' component={PreNBA_Grid}/>
    <Route path='/pre-nba/:name' component={PreNBA}/>
  </Switch>
 );
export default PreNBARouter;
