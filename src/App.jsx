import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <body>
            <div className="logoContent">
              <img src="./images/logo-iboh-flat-400.png" id="titleLogo" alt="title-logo" />
              <span id="logoBack" />
            </div>
            <div className="navBar">
              <NavLink exact to="/" type="button" activeClassName="active" className="buttonLink1">Menu</NavLink>
              <NavLink to="/game" type="button" activeClassName="active" className="buttonLink2">Play</NavLink>
              <NavLink to="/collection" type="button" activeClassName="active" className="buttonLink3">Collection</NavLink>
            </div>
          </body>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
