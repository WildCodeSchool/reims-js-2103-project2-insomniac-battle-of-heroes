import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <NavLink exact to="/" type="button" activeClassName="active" className="buttonLink1">Menu</NavLink>
        <NavLink to="/game" type="button" activeClassName="active" className="buttonLink2">Play</NavLink>
        <NavLink to="/credits" type="button" activeClassName="active" className="buttonLink3">Credits</NavLink>
      </nav>
    </>
  );
}

export default NavBar;
