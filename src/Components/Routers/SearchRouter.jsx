import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../Search/Search.jsx';

 const SearchRouter = () => (
  <Switch>
    <Route path='/search/:searchTopic' component={Search} />
  </Switch>
 );
export default SearchRouter;
