import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../Search/Search.jsx';

 const SearchRouter = () => (
  <Switch>
    <Route path='/search' component={Search}/>
  </Switch>
 );
export default SearchRouter;
