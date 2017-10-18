import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './js_old/About.jsx';
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Teams from './Components/Teams/Teams.jsx';
import Players from './Components/Players/Players.jsx';
import Coaches from './Components/Coaches/Coaches.jsx';
import PreNBA from './Components/PreNBA/PreNBA.jsx';
import PlayerRouter from './Components/PlayerRouter/PlayerRouter.jsx';

export default class Main extends Component {
  render () {
      return (
        <main>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route path='/players' component={PlayerRouter}/>
            <Route exact path='/teams' component={Teams}/>
            <Route exact path='/coaches' component={Coaches}/>
            <Route exact path='/pre-NBA' component={PreNBA}/>
          </Switch>
        </main>
      );
  }
}
