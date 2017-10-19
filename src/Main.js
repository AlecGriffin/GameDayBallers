import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About/About.jsx';
// import About from './js_old/About.jsx';
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import TeamRouter from './Components/Routers/TeamRouter.jsx';
import CoachRouter from './Components/Routers/CoachRouter.jsx';
import PreNBARouter from './Components/Routers/PreNBARouter.jsx';
import PlayerRouter from './Components/Routers/PlayerRouter.jsx';

export default class Main extends Component {
  render () {
      return (
        <main>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route path='/players' component={PlayerRouter}/>
            <Route path='/teams' component={TeamRouter}/>
            <Route path='/coaches' component={CoachRouter}/>
            <Route path='/pre-NBA' component={PreNBARouter}/>
          </Switch>
        </main>
      );
  }
}
