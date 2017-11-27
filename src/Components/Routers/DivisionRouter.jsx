import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Division from '../Division/Division.jsx';
import Division_Grid from '../Division_Grid/Division_Grid.jsx';

 const DivisionRouter = () => (
  <Switch>
    <Route exact path='/divisions' component={Division_Grid}/>
    <Route path='/divisions/:name' component={Division}/>
  </Switch>
 );
export default DivisionRouter;
