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
        <div className="creditsPage">
          <div className="creditsTeam">
            <section className="creditSection">
              <h1>Concept :</h1>
              <p>Jean-Marc Epis</p>
              <p>Timothée Augustin</p>
            </section>
            <section className="creditsSection">
              <h1>Development Team :</h1>
              <p>Jean-Marc Epis</p>
              <p>Timothée Augustin</p>
              <p>Thomas Dietrich</p>
              <p>Hugues Briqueler</p>
            </section>
            <section className="creditSection">
              <h1>Graphic Assets - Design :</h1>
              <p>Thomas Dietrich</p>
            </section>
          </div>
          <div className="creditsRessources">
            <section className="ressourcesSection">
              <h1>Ressources :</h1>
              <p>SuperHero API</p>
              <p>https://www.superheroapi.com</p>
            </section>
            <img src="./images/react.png" id="reactLogo" alt="React Logo" />
            <img src="./images/js.png" id="jsLogo" alt="JavaScript Logo" />
            <img src="./images/css_html.png" id="cssLogo" alt="CSS & HHTML Logo" />
          </div>
          <section className="specialThanks">
            <h1>Special Thanks to our ‘Code Wizard’</h1>
            <p>Romain Guillemot</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Credits;
