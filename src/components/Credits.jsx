import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import './Credits.css';

function Credits() {
  return (
    <>
      <div className="Home">
        <div className="homeLogoContent">
          <Logo />
        </div>
        <div className="homeNavBar">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Credits;
