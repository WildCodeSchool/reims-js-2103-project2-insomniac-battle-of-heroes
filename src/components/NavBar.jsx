import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Game from './Game';
import Home from './Home';

function NavBar() {
  return (
    <Router>
      <>
        <div className="App">
          <div className="logoContent">
            <img src="./images/logo-iboh-flat-400.png" id="titleLogo" alt="title-logo" />
            <span id="logoBack" />
          </div>
          <div className="navBar">
            <NavLink exact to="/" type="button" activeClassName="active" className="buttonLink1">Menu</NavLink>
            <NavLink to="/game" type="button" activeClassName="active" className="buttonLink2">Play</NavLink>
            <NavLink to="/collection" type="button" activeClassName="active" className="buttonLink3">Collection</NavLink>
          </div>
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

export default NavBar;
