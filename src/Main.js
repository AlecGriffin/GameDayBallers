import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import TeamRouter from './Components/Routers/TeamRouter.jsx';
import CoachRouter from './Components/Routers/CoachRouter.jsx';
import DivisionRouter from './Components/Routers/DivisionRouter.jsx';
import PlayerRouter from './Components/Routers/PlayerRouter.jsx';
import SearchRouter from './Components/Routers/SearchRouter.jsx';
import Search from './Components/Search/Search.jsx'
import Ticker from './Components/Ticker/Ticker.jsx'
import Visualization from './Components/Visualization/Visualization.jsx'
import {Row, Col} from 'react-bootstrap';

export default class Main extends Component {
  render () {
      return (
        <div>
            <Header/>
            <Ticker/>
          <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route path='/players' component={PlayerRouter}/>
              <Route path='/teams/' component={TeamRouter}/>
              <Route path='/coaches' component={CoachRouter}/>
              <Route path='/divisions' component={DivisionRouter}/>
              <Route path='/search/' component={SearchRouter}/>
              <Route exact path='/visualization' component={Visualization}/>
            </Switch>
          </main>
        </div>
      );
  }
}
