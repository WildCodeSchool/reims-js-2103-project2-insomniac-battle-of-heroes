import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Game from './components/Game';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="logoContent">
        <img src="./images/logo-iboh-flat-400.png" id="titleLogo" alt="title-logo" />
        <span id="logoBack" />
      </div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
